package com.example.models;

import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name = "roles")
public class RoleEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Enumerated(EnumType.STRING)
    @Column(name = "name", nullable = false)
    private eRole name;


    // Constructor por defecto
    public RoleEntity() {}

    // Constructor con parámetros
    public RoleEntity(long id, eRole name) {
        this.id = id;
        this.name = name;
    }

    // Getters y Setters
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public eRole getName() {
        return name;
    }

    public void setName(eRole name) {
        this.name = name;
    }
    // Builder estático
    public static class Builder {
        private long id;
        private eRole name;

        public Builder id(long id) {
            this.id = id;
            return this;
        }

        public Builder name(eRole name) {
            this.name = name;
            return this;
        }


        public RoleEntity build() {
            return new RoleEntity(id, name);
        }
    }
}
