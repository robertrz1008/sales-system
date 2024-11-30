package com.example.services;

import com.example.models.Category;
import com.example.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;

    public List<Category> categoriesList(){
        return categoryRepository.findAll();
    }

    public Category createCategory(Category category){
        return categoryRepository.save(category);
    }

    public Category updateCategory(long id, Category category){
        Category cat = categoryRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Cat not found"));
        cat.setDescription(category.getDescription());
        return categoryRepository.save(cat);
    }

}
