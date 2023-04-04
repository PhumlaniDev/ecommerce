import { Component, OnInit } from '@angular/core';

import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-product-info-page',
  templateUrl: './product-info-page.component.html',
  styleUrls: ['./product-info-page.component.scss']
})
export class ProductInfoPageComponent implements OnInit{

  product: any;

  constructor(private productService: ProductServiceService) {
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    const cachedProduct = localStorage.getItem("product");
    if (cachedProduct) {
      this.product = JSON.parse(cachedProduct).product;
      // console.log(`From cache ${cachedProduct}`);
    } else {
      this.productService.getProduct().subscribe(data => {
        this.product = data
        console.log(`From api ${this.product}`);
      })
    }
  }
}
