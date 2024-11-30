package com.example.Controller;

import jakarta.annotation.security.PermitAll;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class TestContoller {

    @PermitAll()
    @GetMapping("/app")
    public String index(){
        return "this path is public";
    }

    @GetMapping("/appSecured")
    public String appSecured(){
        return "this path has security";
    }
    @GetMapping("/user")
    public String appSecured1(){
        return "welcome user";
    }
    @GetMapping("/admin")
    public String appSecured2(){
        return "welcome admin";
    }

    @GetMapping("/show")
    public String appSecure3(){
        return "show this api";
    }


}
