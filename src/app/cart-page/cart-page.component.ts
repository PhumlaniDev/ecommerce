import { Component, ImportProvidersSource, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent  {
 
  products=[
  {
    productName:'Long Sleeve Jacket',
    url:'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80',
    color:'Brown',
    price:399.99,
    size:'Small',
    
  }
  ];
  qty:number=1;//set quantity to 1 by default
  price:number = this.products[0].price;//get price from products array 
  a_total_price :number =this.price;//initialize total to the orginal price
  
 
   //increment quantity and increase the price
  increment(){
     
    if(this.qty++){
      this.a_total_price += this.price;
    }
  }

  //decrement quantity and decrease the price
  decrement(){
    if(this.qty !=1){
   
        if(this.qty--){
          this.a_total_price -= this.price;
        }
    }
    
    
  }
  }
    






   

