import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
