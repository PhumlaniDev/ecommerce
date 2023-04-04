import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LocalStorageService } from 'ngx-webstorage';
import { NgModule } from '@angular/core';
import { ProductInfoPageComponent } from './components/product-info-page/product-info-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductInfoPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
