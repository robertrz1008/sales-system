package com.example.services;

import com.example.models.Client;
import com.example.models.Product;
import com.example.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository repository;

    public List<Product> productList(){
        return repository.findAll();
    }
    public Product createProduct(Product pro){
        return repository.save(pro);
    }
    public Product updateProduct(long id, Product pro){
        Product proFound = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Cat not found"));
        proFound.setDescription(pro.getDescription());
        proFound.setPrice(pro.getPrice());

        return repository.save(proFound);
    }

    public ResponseEntity<?> deleteProduct(long id){
        Product proFound = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Cat not found"));

        repository.delete(proFound);
        return new ResponseEntity<>(HttpStatus.OK);

    }
}
