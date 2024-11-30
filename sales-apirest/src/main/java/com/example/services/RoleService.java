package com.example.services;

import com.example.models.RoleEntity;
import com.example.repositories.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoleService {

    @Autowired
    private RoleRepository repository;

    public RoleEntity createRole(RoleEntity role){
        return repository.save(role);
    }
}
