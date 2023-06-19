import { Component, ElementRef, ImportProvidersSource, OnInit, ViewChild } from '@angular/core';

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
    qty:1,
    sub_total_price :0
  },
  {
    prod_Id:2,
    productName:'Hand Bag',
    url:'https://images.unsplash.com/photo-1665390856430-d962edb95ab1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    color:'White',
    price:399.99,
    size:'Small',
    qty:1,
    sub_total_price :0
  }
  ];



subTotalCell: any;
subTotalValue: any;
calculatedValue:any;
total_to_pay:any;
sub_total:any

ngAfterViewInit(){
  this.subTotalCell = document.getElementById('sub_total');
  this.subTotalValue = this.subTotalCell.textContent.trim().replace('R', '');
  this.calculatedValue = parseFloat(this.subTotalValue);
  
  return this.calculatedValue;
 
}


  increment(prod:any){
   
     if(prod.qty!=10){
      prod.qty += 1;
      
      console.log(prod.sub_total_price)
      // for(let i = 0; i < this.products.length; i++){
      //   //
      //   this.products[i].sub_total_price = this.products[i].price* this.products[i].qty;
      //   console.log(this.products[i].sub_total_price);
      //   this.products[i].sub_total_price=this.calculatedValue;
      // }
      }
      


  }

  //decrement quantity and decrease the price
  decrement(prod:any){

    if(prod.qty !=1){
       prod.qty -= 1;
        
    }
    
  }

 
}
   






   

