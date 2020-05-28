import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/common/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  currentCategoryId: number = 1;
  previousCategorId: number = 1;
  searchMode: boolean = false;

  // properties for pagination
  thePageNumber: number = 1;
  thePageSize: number = 5;
  theTotalElements: number = 0;
  

  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }

              // similar to @PostConstruct
  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
  }

  listProducts() {

    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if (this.searchMode) {
      this.handleSearchProducts();
    }
    else {
      this.handleListProducts();
    }

  }

  handleSearchProducts() {

    const theKeyword: string = this.route.snapshot.paramMap.get('keyword');

    // now search for the products using keyword
    this.productService.searchProducts(theKeyword).subscribe(
      data => {
        this.products = data;
      }
    )
  }

  handleListProducts() {

    // check if "id" parameter is available
    // "route" - use the activated route. 
    // "snapshot" - state of route at this given moment in time
    // "paramMap" - map of all the route parameters
    // "('id')" -- read the id parameter
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      // get the "id" param string. convert string to a number using the "+" symbol
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id');
    }
    else {
      // not category id available ... default to category id 1
      this.currentCategoryId = 1;
    }

    // Check is we have a different category the previous
    // Note: Angular will reuse a component if it is currently 
    // being viewed.

    // if we have a different category id than previous
    // then set thePageNumber back to 1
    if (this.previousCategorId != this.currentCategoryId) {
      this.thePageNumber = 1;
    }

    this.previousCategorId = this.currentCategoryId;
    console.log(`currentCategoryId=${this.currentCategoryId}, thePageNumber=${this.thePageNumber}`);

    // now get the products for the given category id, make call to remote API
    // "- 1" due to Spring Java being "0" based
    // and Angular being "1" based
   this.productService.getProductListPaginate(this.thePageNumber - 1, this.thePageSize, 
                                              this.currentCategoryId)
                                              .subscribe(this.processResult());
  }

  // map JSON response to properties for this class
  // this.* is this class
  // data.* is response JSON from remote API
  processResult() {
    return data => {
      this.products = data._embedded.products;
      // "+ 1" due to Spring Java being "0" based
      // and Angular being "1" based
      this.thePageNumber = data.page.number + 1;
      this.thePageSize = data.page.size;
      this.theTotalElements = data.page.totalElements;
    };
  }

  // updates page size based on user choice 
  updatePageSize(pageSize: number) {
    this.thePageSize = pageSize;
    this.thePageNumber = 1;
    // to refresh view
    this.listProducts();
  }
}