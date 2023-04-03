import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-product-info-page',
  templateUrl: './product-info-page.component.html',
  styleUrls: ['./product-info-page.component.scss']
})
export class ProductInfoPageComponent implements OnInit{

  product: any;
  products: any;

  constructor(private productService: ProductServiceService) {
  }

  ngOnInit(): void {
    this.getProduct();
    this.getProducts();
  }

  getProduct() {
    this.productService.getProduct().subscribe((data) => {
    this.product = data.product;
    console.log(this.product);
    });
  }
  getProducts() {
    this.productService.getProducts().subscribe((data) => { 
      this.products = data.results;
      console.log(this.products)
    })
  }
}
