package com.example.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Size;

import java.util.List;

@Entity
@Table(name="products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Size(max = 150)
    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private int price;

    @ManyToOne
    @JoinColumn(name = "categories_id", referencedColumnName = "id", nullable = false)
    private Category category;

    @OneToMany(cascade = CascadeType.ALL)
    @JsonIgnore
    private List<ProductDetail> productDetails;

    public Product() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public @Size(max = 150) String getDescription() {
        return description;
    }

    public void setDescription(@Size(max = 150) String description) {
        this.description = description;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public List<ProductDetail> getProductDetails() {
        return productDetails;
    }

    public void setProductDetails(List<ProductDetail> productDetails) {
        this.productDetails = productDetails;
    }

    @Override
    public String toString() {
        return "Product{";
    }
}
