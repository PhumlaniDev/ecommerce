import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { ProductInfoPageComponent } from './components/product-info-page/product-info-page.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "product",
    pathMatch: "full"
  },
  {
    path:"product",
    component:ProductInfoPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
