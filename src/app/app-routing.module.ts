import { RouterModule, Routes } from '@angular/router';
import { ProductCardComponent } from './components/product-card/product-card.component';

<<<<<<< HEAD
const routes: Routes = [
  {
    path: "products",
    component: ProductCardComponent
  }
=======
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
>>>>>>> 91f9783645b40a172670cb7fa5989b887d0ab73a
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
