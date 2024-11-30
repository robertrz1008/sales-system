package com.example.services;

import com.example.dto.AuthLoginRequest;
import com.example.dto.AuthRegisterRequest;
import com.example.dto.AuthResponse;
import com.example.models.RoleEntity;
import com.example.models.UserEntity;
import com.example.repositories.RoleRepository;
import com.example.repositories.UserRepository;
import com.example.utils.CookieUtil;
import com.example.utils.JWTUtils;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.management.relation.Role;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class UserDetailServiceImpl implements UserDetailsService {

    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private JWTUtils jwtUtils;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserEntity userEntity = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        List<SimpleGrantedAuthority> authorityList = new ArrayList<>();

        userEntity.getRoles()
                .forEach(role -> authorityList.add(new SimpleGrantedAuthority("ROLE_".concat(role.getName().name()))));

        return new User(
                userEntity.getUsername(),
                userEntity.getPassword(),
                userEntity.isEnaABoolean(),
                userEntity.isAccountNoExpired(),
                userEntity.isAccountNoExpired(),
                userEntity.isCredentialNoLocked(),
                authorityList
        );
    }

    public Authentication authenticate(String username, String password){
        UserDetails userDetails = this.loadUserByUsername(username);
        if(userDetails == null){
            throw new BadCredentialsException("Invalid username or password");
        }
        if(!passwordEncoder.matches(password, userDetails.getPassword())){
            throw  new BadCredentialsException("Invalid password");
        }

        return new UsernamePasswordAuthenticationToken(username, userDetails.getPassword(), userDetails.getAuthorities());
    }

    public AuthResponse loginUser(AuthLoginRequest authLoginRequest, HttpServletResponse response){
        String username = authLoginRequest.username();
        String password = authLoginRequest.password();

        Authentication authentication = this.authenticate(username, password);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String accessToken = jwtUtils.createToken(authentication);

        // Aquí creamos la cookie con el token
        CookieUtil.createCookie(response, "JWT_TOKEN", accessToken, 3600); // 24 hs

        return new AuthResponse(username, "Welcome to this web service!", accessToken, true);
    }

    public ResponseEntity<?> createUser(AuthRegisterRequest userRequest){
        String username = userRequest.username();
        String telephone = userRequest.telephone();
        String password = userRequest.password();
        List<String> roleRequest = userRequest.roleRequest().roleListName();

        Set<RoleEntity> roleEntitySet = roleRepository.findRoleEntityByNameIn(roleRequest).stream()
                .collect(Collectors.toSet());

        if(roleEntitySet.isEmpty()){
            throw new IllegalArgumentException("The role especified does not exit");
        }

        UserEntity userEntity = new UserEntity.Builder()
                .username(username)
                .telephone(telephone)
                .password(passwordEncoder.encode(password))
                .roles(roleEntitySet)
                .accountNoExpired(true)
                .credentialNoLocked(true)
                .credentialNoExpired(true)
                .build();

        UserEntity userCreated= userRepository.save(userEntity);

        /*ArrayList<SimpleGrantedAuthority> authorityList = new ArrayList<>();
        userCreated.getRoles().forEach(role -> authorityList.add(new SimpleGrantedAuthority("ROLE_".concat(role.getName().name()))));

        Authentication auth = new UsernamePasswordAuthenticationToken(userCreated.getUsername(), userCreated.getPassword(), authorityList);
        String accessToken = jwtUtils.createToken(auth);
        CookieUtil.createCookie(response, "JWT_TOKEN", accessToken, 1800);

        AuthResponse authResponse = new AuthResponse(userCreated.getUsername(),"User created successfully", accessToken, true);

        return authResponse;*/
        return new ResponseEntity<>(HttpStatus.OK);
    }

    public Optional<UserEntity> verifyProfile(){

        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String name = auth.getName();

        return userRepository.findByUsername(name);
    }

    public List<UserEntity> usersList(){
        return userRepository.findAll();
    }
}
