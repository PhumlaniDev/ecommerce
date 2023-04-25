import { Component, ImportProvidersSource, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent  {
 
  products=[
  {
    prod_Id:1,
    productName:'Long Sleeve Jacket',
    url:'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80',
    color:'Brown',
    price:399.99,
    size:'Small',
    qty:1
    
  },
  {
    prod_Id:2,
    productName:'Hand Bag',
    url:'https://images.unsplash.com/photo-1665390856430-d962edb95ab1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    color:'White',
    price:399.99,
    size:'Small',
    qty:1
    
  }
  ];
  subtotal_price: any | undefined;
 

  get_total_price(){

      for(let i = 0; i < this.products.length; i++){
    
        this.subtotal_price += this.products[i].price
        
   }
    return this.subtotal_price;
  }
   //increment quantity and increase the price
  increment(prod:any){

     if(prod.qty!=10){
      prod.qty += 1;
      
      
     }


  }

  //decrement quantity and decrease the price
  decrement(prod:any){

    if(prod.qty !=1){
       prod.qty -= 1;
        
    }
  }
  }
    






   

