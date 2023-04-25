import { Component, OnInit } from '@angular/core';

import { Product } from './../../model/product';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-product-info-page',
  templateUrl: './product-info-page.component.html',
  styleUrls: ['./product-info-page.component.scss'],
})
export class ProductInfoPageComponent implements OnInit {
  product: any;
  products: Product[]

  constructor(
    private productService: ProductServiceService
  ) {
    this.products = []
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct = () => {
    this.productService.fakeProduct(1).subscribe((data) => {
      this.product = data;
      console.log(this.product);
    });
  };

  addToCart = () => {
    this.productService
      .fakeAddToCart(this.product)
      .subscribe(
        (data) => this.products.push(data));
  };

  // getProduct() {
  //   const cachedProduct = localStorage.getItem('product');
  //   if (cachedProduct) {
  //     this.product = JSON.parse(cachedProduct).product;
  //     // console.log(`From cache ${cachedProduct}`);
  //   } else {
  //     this.productService.getProduct().subscribe((data) => {
  //       this.product = data;
  //     });
  //   }
  // }

  // getPrice = (): any => {
  //   this.productService.getProduct().subscribe((data) => {
  //     this.price = data.product.articlesList[0].whitePrice.price;
  //   });
  // };

  // updateTotalPrice() {
  //   this.calculatedPrice = this.price * this.quantity;
  //   console.log(this.price);
  // }

  // increasePrice = () => {
  //   this.price * this.quantity
  // };

  // decreasePrice = (): void => {
  // }
}
