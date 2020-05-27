package com.luv2code.ecommerce.dao;

import com.luv2code.ecommerce.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

// of client, can use wild cards. i.e. www.steigerwald.com or
// www.steigerwald.com/api/*
@CrossOrigin("http://localhost:4200")
// specify entity type and primary key type <Product, Long>
public interface ProductRepository extends JpaRepository<Product, Long> {

    // this is query method because method starts with "findBy"
    // Spring will expose endpoint based on id passed in
    // SELECT * FROM product where category_id=?
    Page<Product> findByCategoryId(@RequestParam("id") Integer id, Pageable pageable);

    // SELECT * FROM Product p
    // WHERE
    // p.name LIKE CONCAT('%', :name ,'%')
    Page<Product> findByNameContaining(@RequestParam("name") String name, Pageable pageable);
}
