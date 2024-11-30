package com.example.Controller;

import com.example.models.Product;
import com.example.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product")
public class ProductController {

    @Autowired
    private ProductService proService;

    @PreAuthorize("hasRole('DEVELOPER')")
    @GetMapping("/list")
    public List<Product> productsList(){
        return proService.productList();
    }

    @PreAuthorize("hasRole('DEVELOPER')")
    @PostMapping("/create")
    public Product createProduct(@RequestBody Product product){
        return proService.createProduct(product);
    }

    @PreAuthorize("hasRole('DEVELOPER')")
    @PutMapping("/update/{id}")
    public Product updateProduct(@PathVariable long id, @RequestBody Product pro){
        return proService.updateProduct(id, pro);
    }

    @PreAuthorize("hasAnyRole('DEVELOPER', 'ADMIN')")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable long id){
        return proService.deleteProduct(id);
    }
}
