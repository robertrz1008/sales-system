package com.example.Controller;

import com.example.dto.AuthLoginRequest;
import com.example.dto.AuthRegisterRequest;
import com.example.dto.AuthResponse;
import com.example.models.RoleEntity;
import com.example.models.UserEntity;
import com.example.services.RoleService;
import com.example.services.UserDetailServiceImpl;
import jakarta.annotation.security.PermitAll;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private UserDetailServiceImpl userDetailService;
    @Autowired
    private RoleService roleService;

    @PermitAll()
    @GetMapping("/profile")
    public Optional<UserEntity> verifyProfile(){
        return userDetailService.verifyProfile();
    }

    @PermitAll()
    @GetMapping("/index")
    public String index(){
        return "hello from server";
    }

    @PermitAll()
    @PostMapping("/logIn")
    public ResponseEntity<AuthResponse> login(@RequestBody @Valid AuthLoginRequest userRequest, HttpServletResponse response){
        ResponseEntity loginResponse;
        try {
            loginResponse = new ResponseEntity<>(this.userDetailService.loginUser(userRequest, response), HttpStatus.OK);
            return loginResponse;
        }catch (Exception e){
            return new ResponseEntity<>(new AuthResponse(null, "Username or password not valid","", false), HttpStatus.OK);
        }

    }

    @PreAuthorize("hasAnyRole('DEVELOPER', 'ADMIN')")
    @PostMapping("/sigIn")
    public ResponseEntity<?> register(@RequestBody @Valid AuthRegisterRequest userRequest){
        return new ResponseEntity<>(this.userDetailService.createUser(userRequest), HttpStatus.OK);
    }
    @PreAuthorize("hasAnyRole('DEVELOPER', 'ADMIN')")
    @GetMapping("/users")
    public List<UserEntity> usersAll(){
        return userDetailService.usersList();
    }

    @PreAuthorize("hasAnyRole('DEVELOPER', 'ADMIN')")
    @PostMapping("/createRole")
    public RoleEntity createRole(@RequestBody RoleEntity role){
        return roleService.createRole(role);
    }

}
