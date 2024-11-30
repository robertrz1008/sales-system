package com.example.utils;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.java.Log;

import java.util.Arrays;
import java.util.logging.Logger;

public class CookieUtil {
    public static void createCookie(HttpServletResponse response, String name, String value, int expiry){
        Cookie cookie = new Cookie(name, value);

        if(name.isEmpty()) return;

        cookie.setHttpOnly(true);  // Evita que JavaScript acceda a la cookie (mejora la seguridad)
        cookie.setMaxAge(expiry);  // Tiempo de vida de la cookie
        cookie.setPath("/");       // Elige el path para la cookie
        cookie.setSecure(true);    // Asegúrate de que sea transmitida solo por HTTPS en producción

        response.addCookie(cookie);
    }
    public static void deleteCookie(HttpServletResponse response, String name) {
        Cookie cookie = new Cookie(name, null);
        cookie.setMaxAge(0);  // Expira inmediatamente la cookie
        cookie.setPath("/");
        response.addCookie(cookie);
    }

    public static Cookie getCookie(HttpServletRequest request, String name) {
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            return Arrays.stream(cookies)
                    .filter(cookie -> cookie.getName().equals(name))
                    .findFirst()
                    .orElse(null);
        }
        return null;
    }
}
