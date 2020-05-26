import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // url of api service
  private baseUrl = 'http://localhost:8080/api/products';

  // inject httpClient into ProductService
  constructor(private httpClient: HttpClient) { }

  getProductList(theCategoryId: number): Observable<Product[]> {
    
    // need to build URL based on category id
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;

    return this.httpClient.get<GetResponse>(searchUrl).pipe(
                map(response => response._embedded.products)
    );
  }
}
  // _embedded is the JSON response from the API
  // Product class should match expected JSON object
  interface GetResponse {
    _embedded: {
      products: Product[];
    }
  }
