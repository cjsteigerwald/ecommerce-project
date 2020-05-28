2/28/2020 @0459
2/28/2020 @0212
Pagination
1. Add ng-bootstrap
2. Update app.module.ts
  - import ng-bootstrap
  - add ng-bootstrap to @NgModule imports
3. Update ProductService
  - add page to GetResponseProducts interface
  - add new method getProductListPaginate()
4. Update ProductListComponent
  - update class properties for pagination
  - create method getProductListPaginate()
  - create helper method processResults()
5. Enhance HTML template to use ng-bootstrap pagination component
  - product-list-grid.html
    - add footer
    - add ngb-pagination with properties, and event binding
6. Allow user to pick page size
  - Add drop-down list for page size to product-list-grid.html
  - update ProductListComponent with updatePageSize()
7. Add pagination support to ProductService
  -  add method searchProductPaginate() 
8. Update ProductListComponent to handle pagination
  - add method searchProductsPaginate()

Creating Master View to Details View

2/27/20 @1451
Finish details page added following to details
  - product name
  - product image
  - product price
  - product description
  - purchase item button (not functioning)
  - back to products link

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