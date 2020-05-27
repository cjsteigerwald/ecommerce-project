Creating Master View to Details View

2/27/20 @ 1438
Retrieve Prodcut Details and display to details page
  - currently product.name is displaying to details page

2/27/20 @1356
Links from Master View to Details View Complete
1. Create component components/ProductDetails
  - add route to app.module.ts to ProductDetails
  - add router links to product-list-grid.component.html
    - add links to product image and product name



Search for Products by Keyword
1. Modify Spring Boot app - Add a new search method
  - Update Java ProductRepository to include new method findByNameContaining() to 
    expose API for product search. 
2. Modify Angulare - for search
  - create component components/search
  - update routes in app.module.ts
  - update app.component.html with search.component selector for searching
  - update search.component.html with search function
  - update search.component.ts to send data to search route, and search function
  - refactor product.service.ts to search for product by keyword
5. Enhance ProductListComponent to search for products with ProductService
6. Update ProductService to call URL on Spring Boot app
7. Enhance Client to handle "No Products Found"

5/27/20 @ 0604
create class common/product-category
create component components/product-category-menu
Update category menu to be created dynamically from
API. 
