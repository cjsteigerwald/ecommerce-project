package com.luv2code.ecommerce.dao;

import com.luv2code.ecommerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
// specify entity type and primary key type <Product, Long>
public interface ProductRepository extends JpaRepository<Product, Long> {

}
