import { AppComponent } from './src/app/app.component';
import { AppRoutingModule } from './src/app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ProductInfoPageComponent } from './src/app/components/product-info-page/product-info-page.component';
import { ProductListComponent } from './src/app/components/product-list/product-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

// import {CommonModule} from '@angular/common';




@NgModule({
  declarations: [
    AppComponent,
    ProductInfoPageComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    // CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
