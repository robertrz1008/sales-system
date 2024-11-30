package com.example.repositories;

import com.example.models.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
    Optional<UserEntity> findByUsername(String userName);

    @Query("select u from UserEntity u where u.username = ?1")
    Optional<UserEntity> getName(String userName);


}
