package com.example.services;

import com.example.models.ProductDetail;
import com.example.models.Sale;
import com.example.repositories.ProductDetailRepository;
import com.example.repositories.SaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class TransactionService {
    @Autowired
    private ProductDetailRepository pdRepository;
    @Autowired
    private SaleRepository saleRepository;

    public Sale createSale(Sale sale){
        return saleRepository.save(sale);
    }

    public ProductDetail createProductDetail(ProductDetail productDetail){
        return pdRepository.save(productDetail);
    }

    public ResponseEntity<?> updateSale(long id, Sale sale){
        Sale saleFound = saleRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Cat not found"));

        saleFound.setTotal(sale.getTotal());

        saleRepository.save(sale);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
