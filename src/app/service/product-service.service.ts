import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

import { Injectable } from '@angular/core';
import { environment } from './../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  constructor(private http: HttpClient) {}

  // getProduct = (): Observable<any> => {
  //   const httpOptions = {
  //     method: 'GET',
  //     headers: new HttpHeaders({
  //       'X-RapidAPI-Key': '0df42bf004mshff1b0ac52e4ea41p1f9ce6jsnbb2b86d832c7',
  //       'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com',
  //     }),
  //   };

  //   const params = {
  //     lang: 'en',
  //     country: 'us',
  //     productcode: '0783354017',
  //   };

  //   const cachedProduct = localStorage.getItem('product');

  //   if (cachedProduct) {
  //     return of(JSON.parse(cachedProduct));
  //   }

  //   return this.http
  //     .get(`${environment.apiUrl}/products/detail`, {
  //       params,
  //       headers: httpOptions.headers,
  //     })
  //     .pipe(
  //       tap((data) => {
  //         this.cacheProduct(data);
  //       })
  //     );
  // };

  //Get products
  fakeProducts = (): Observable<any> => {
    return this.http.get(
      `${environment.fakeAPI}/products`
    );
  };

  fakeProduct = (productId: any): Observable<any> => {
    return this.http.get(
      `${environment.fakeAPI}/products/${productId}`
    );
  };

  fakeCategories = (): Observable<any> => {
    return this.http.get(
      `${environment.fakeAPI}/products/categories`
    );
  };

  fakeCategory = (categoryId: any) => {
    return this.http.get(
      `${environment.fakeAPI}/products/category/${categoryId}`
    );
  };

  fakeAddToCart = (body:Object): Observable<any> => {
    return this.http.post<any>(
      `${environment.fakeAPI}/cart`,{body}
    )
  }

  cacheProduct = (product: any): Promise<void> => {
    return new Promise<void>((resolve) => {
      localStorage.setItem('product', JSON.stringify(product));
      resolve();
    });
  };
}