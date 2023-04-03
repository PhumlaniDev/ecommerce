import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  constructor(private http: HttpClient) {}

  getProduct = (): Observable<any> => {
    const httpOptions = {
      method: 'GET',
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '0df42bf004mshff1b0ac52e4ea41p1f9ce6jsnbb2b86d832c7',
        'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com',
      }),
    };

    const params = {
      lang: 'en',
      country: 'us',
      productcode: '0783354017',
    };

    return this.http.get(`${environment.apiUrl}/products/detail`, {
      params,
      headers: httpOptions.headers,
    });
  };

  getProducts = (): Observable<any> => {
    const httpOptions = {
      method: 'GET',
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '0df42bf004mshff1b0ac52e4ea41p1f9ce6jsnbb2b86d832c7',
        'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com',
      }),
    };

    const params = {
      country: 'us',
      lang: 'en',
      currentpage: '0',
      pagesize: '30',
      categories: 'men_all',
      concepts: 'H&M MAN',
      productcode: '0783354017',
    };

    return this.http.get(`${environment.apiUrl}/products/list`, {
      params,
      headers: httpOptions.headers,
    });
  };

  // getProductMainImage = (): Observable<any> => {
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
  //   };

  //   return this.http.get(`${environment.apiUrl}/products/list`, {
  //     params,
  //     headers: httpOptions.headers,
  //   });
  // };
}
