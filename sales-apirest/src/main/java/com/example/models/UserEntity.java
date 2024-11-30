package com.example.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.util.Set;

@Entity
@Table(name = "users")
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @NotBlank
    @Size(max = 80)
    private String telephone;

    @NotBlank
    @Size(max = 45)
    @Column(unique = true)
    private String username;

    @NotBlank
    private String password;

    @Column(name = "is_enabled")
    private boolean isEnaABoolean;

    @Column(name = "acconut_no_expired")
    private boolean accountNoExpired;

    @Column(name = "credential_no_locked")
    private boolean credentialNoLocked;

    @Column(name = "credential_no_expired")
    private boolean credentialNoExpired;

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "user_roles", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<RoleEntity> roles;


    public UserEntity() {}

    public UserEntity(long id, String username, String telephone, String password, boolean isEnaABoolean, boolean accountNoExpired, boolean credentialNoLocked, boolean credentialNoExpired, Set<RoleEntity> roles) {
        this.id = id;
        this.username = username;
        this.telephone = telephone;
        this.password = password;
        this.isEnaABoolean = isEnaABoolean;
        this.accountNoExpired = accountNoExpired;
        this.credentialNoLocked = credentialNoLocked;
        this.credentialNoExpired = credentialNoExpired;
        this.roles = roles;
    }

    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String gettelephone() {
        return telephone;
    }
    public void settelephone(String telephone) {
        this.telephone = telephone;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public Set<RoleEntity> getRoles() {
        return roles;
    }
    public void setRoles(Set<RoleEntity> roles) {
        this.roles = roles;
    }

    public boolean isEnaABoolean() {
        return isEnaABoolean;
    }
    public void setEnaABoolean(boolean enaABoolean) {
        isEnaABoolean = enaABoolean;
    }
    public boolean isAccountNoExpited() {
        return accountNoExpired;
    }
    public void setAccountNoExpited(boolean accountNoExpited) {
        this.accountNoExpired = accountNoExpited;
    }
    public boolean isCredentialNoLocked() {
        return credentialNoLocked;
    }
    public void setCredentialNoLocked(boolean credentialNoLocked) {
        this.credentialNoLocked = credentialNoLocked;
    }
    public boolean isAccountNoExpired() {
        return accountNoExpired;
    }
    public void setAccountNoExpired(boolean accountNoExpired) {
        this.accountNoExpired = accountNoExpired;
    }

    public boolean isCredentialNoExpired() {
        return credentialNoExpired;
    }

    public void setCredentialNoExpired(boolean credentialNoExpired) {
        this.credentialNoExpired = credentialNoExpired;
    }

    public static class Builder {
        private long id;
        private String telephone;
        private String username;
        private String password;
        private boolean isEnaABoolean;
        private boolean accountNoExpired;
        private boolean credentialNoLocked;
        private boolean credentialNoExpired;
        private Set<RoleEntity> roles;

        public Builder id(long id) {
            this.id = id;
            return this;
        }

        public Builder telephone(String telephone) {
            this.telephone = telephone;
            return this;
        }

        public Builder username(String username) {
            this.username = username;
            return this;
        }

        public Builder password(String password) {
            this.password = password;
            return this;
        }
        public Builder accountNoExpired(boolean accountNoExpired){
            this.accountNoExpired = accountNoExpired;
            return this;
        }
        public Builder isEnabled(boolean isEnaABoolean){
            this.isEnaABoolean = isEnaABoolean;
            return this;
        }
        public Builder credentialNoLocked(boolean credentialNoLocked){
            this.credentialNoLocked = credentialNoLocked;
            return this;
        }
        public Builder credentialNoExpired(boolean credentialNoExpired){
            this.credentialNoExpired = credentialNoExpired;
            return this;
        }

        public Builder roles(Set<RoleEntity> roles) {
            this.roles = roles;
            return this;
        }

        public UserEntity build() {
            return new UserEntity(id, username, telephone, password, isEnaABoolean, accountNoExpired, credentialNoLocked, credentialNoExpired, roles);
        }
    }

}
