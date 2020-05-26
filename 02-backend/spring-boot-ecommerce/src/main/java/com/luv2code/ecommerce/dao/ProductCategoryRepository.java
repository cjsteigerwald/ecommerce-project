package com.luv2code.ecommerce.dao;

import com.luv2code.ecommerce.entity.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

// allows java script to run client side, need to give url
// of client, can use wild cards. i.e. www.steigerwald.com or
// www.steigerwald.com/api/*
@CrossOrigin("http://localhost:4200")
// collectionResourceRel = "productCategory" -- is the title of the json returned from api call
// path = "product-category" overrides default api path that would have made first letter
// lowercase and added an "s" to the end of the entity name.
@RepositoryRestResource(collectionResourceRel = "productCategory", path = "product-category")
public interface ProductCategoryRepository extends JpaRepository <ProductCategory, Long> {
}
