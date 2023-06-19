import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  products:any;
   prodImg=[{
      url:'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80'
  
  }]

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();

    throw new Error('Method not implemented.');
  }

  getProducts():void{
    this.productsService.getProducts()
  .subscribe(products => this.products = products);
  
  };

}
