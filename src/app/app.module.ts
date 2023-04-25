import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ProductCardComponent } from './components/product-card/product-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
=======
<<<<<<< HEAD
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ProductInfoPageComponent } from './components/product-info-page/product-info-page.component';
=======
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
>>>>>>> main
>>>>>>> 91f9783645b40a172670cb7fa5989b887d0ab73a

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ProductCardComponent
=======
<<<<<<< HEAD
    ProductInfoPageComponent
=======
    NavbarComponent
>>>>>>> main
>>>>>>> 91f9783645b40a172670cb7fa5989b887d0ab73a
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule
=======
<<<<<<< HEAD
    HttpClientModule,
    FormsModule
=======
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
>>>>>>> main
>>>>>>> 91f9783645b40a172670cb7fa5989b887d0ab73a
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
