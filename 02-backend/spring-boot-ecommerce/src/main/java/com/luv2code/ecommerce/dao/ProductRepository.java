package com.luv2code.ecommerce.dao;

import com.luv2code.ecommerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

// allows java script to run client side, need to give url
// of client, can use wild cards. i.e. www.steigerwald.com or
// www.steigerwald.com/api/*
@CrossOrigin("http://localhost:4200")
// specify entity type and primary key type <Product, Long>
public interface ProductRepository extends JpaRepository<Product, Long> {

}
