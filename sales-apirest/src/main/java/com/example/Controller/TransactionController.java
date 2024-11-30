package com.example.Controller;

import com.example.models.ProductDetail;
import com.example.models.Sale;
import com.example.services.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/transaction")
public class TransactionController {

    @Autowired
    private TransactionService service;

    @PostMapping("/proDetail")
    public ProductDetail createProD(@RequestBody ProductDetail productDetail){
        return service.createProductDetail(productDetail);
    }

    @PostMapping("/sale")
    public Sale createSale(@RequestBody Sale sale){
        return service.createSale(sale);
    }

    @PutMapping("/sale/{id}")
    public ResponseEntity<?> updateSale(@RequestBody Sale sale, @PathVariable long id){
        return service.updateSale(id, sale);
    }
}
