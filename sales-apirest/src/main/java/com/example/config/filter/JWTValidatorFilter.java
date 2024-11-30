package com.example.config.filter;

import com.auth0.jwt.interfaces.DecodedJWT;
import com.example.utils.CookieUtil;
import com.example.utils.JWTUtils;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Collection;

public class JWTValidatorFilter extends OncePerRequestFilter {

    private JWTUtils jwtUtil;

    public JWTValidatorFilter(JWTUtils jwtUtil) {
        this.jwtUtil = jwtUtil;
    }

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain) throws ServletException, IOException {

        //String token = request.getHeader(HttpHeaders.AUTHORIZATION);
        Cookie jwtCookie = CookieUtil.getCookie(request, "JWT_TOKEN");



        if (jwtCookie != null){
            String token = jwtCookie.getValue();
            //token = token.substring(7);
            DecodedJWT decodedJWT = jwtUtil.validateToken(token);
            String username = jwtUtil.extractStringUserName(decodedJWT);
            String stringAuthorities = jwtUtil.getSpecificClaim(decodedJWT, "authorities").asString();
            Collection<? extends GrantedAuthority> authorities = AuthorityUtils.commaSeparatedStringToAuthorityList(stringAuthorities);

            SecurityContext context = SecurityContextHolder.getContext();
            Authentication authentication = new UsernamePasswordAuthenticationToken(username, null, authorities);
            context.setAuthentication(authentication);

            SecurityContextHolder.setContext(context);
        }
        filterChain.doFilter(request, response);
    }
}
