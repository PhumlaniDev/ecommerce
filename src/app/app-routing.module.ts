import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { ProductInfoPageComponent } from './components/product-info-page/product-info-page.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  {
    path: "products",
    component:ProductListComponent
  },
  {
    path:"products/:productId",
    component:ProductInfoPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
