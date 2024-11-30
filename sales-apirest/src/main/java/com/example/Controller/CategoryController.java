package com.example.Controller;

import com.example.models.Category;
import com.example.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/category")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    @PreAuthorize("hasAnyRole('DEVELOPER', 'ADMIN')")
    @GetMapping("/list")
    public List<Category> categoriesList(){
        return categoryService.categoriesList();
    }

    @PreAuthorize("hasAnyRole('DEVELOPER', 'ADMIN')")
    @PostMapping("/create")
    public Category createCategory(@RequestBody Category category){
        return categoryService.createCategory(category);
    }
    @PreAuthorize("hasAnyRole('DEVELOPER', 'ADMIN')")
    @PutMapping("/update/{id}")
    public Category updateCategory(@PathVariable long id, @RequestBody Category category){
        return categoryService.updateCategory(id, category);
    }

}
