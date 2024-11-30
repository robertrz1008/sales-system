package com.example.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;

import java.util.List;

@Entity
@Table(name = "clients")
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Size(max = 45)
    @Column(nullable = false)
    private String name;

    @Email
    @Size(max = 45)
    @Column(nullable = false)
    private String email;

    @Size(max = 14)
    @Column(nullable = false)
    private String telephone;

    @Size(max = 50)
    private String direction;

    @Size(max = 25)
    private String dni;

    @OneToMany(cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Sale> sales;

    public Client(long id, String name, String email, String telephone, String direction, String dni) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.telephone = telephone;
        this.direction = direction;
        this.dni = dni;
    }

    public Client() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public @Size(max = 45) String getName() {
        return name;
    }

    public void setName(@Size(max = 45) String name) {
        this.name = name;
    }

    public @Email @Size(max = 45) String getEmail() {
        return email;
    }

    public void setEmail(@Email @Size(max = 45) String email) {
        this.email = email;
    }

    public @Size(max = 14) String getTelephone() {
        return telephone;
    }

    public void setTelephone(@Size(max = 14) String telephone) {
        this.telephone = telephone;
    }

    public @Size(max = 50) String getDirection() {
        return direction;
    }

    public void setDirection(@Size(max = 50) String direction) {
        this.direction = direction;
    }

    public @Size(max = 25) String getDni() {
        return dni;
    }

    public void setDni(@Size(max = 25) String dni) {
        this.dni = dni;
    }

    public List<Sale> getSales() {
        return sales;
    }

    public void setSales(List<Sale> sales) {
        this.sales = sales;
    }

    public static class Builder{
        private long id;
        private String name;
        private String email;
        private String telephone;
        private String direction;
        private String dni;

        public Builder name(String name){
            this.name = name;
            return this;
        }
        public Builder email(String email){
            this.email = email;
            return this;
        }
        public Builder telephone(String telephone){
            this.telephone = telephone;
            return this;
        }
        public Builder direction(String direction){
            this.direction = direction;
            return this;
        }
        public Builder dni(String dni){
            this.dni = dni;
            return this;
        }

    }


}
