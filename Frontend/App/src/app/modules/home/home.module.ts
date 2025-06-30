import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,FormsModule, HttpClientModule
  ]
})
export class HomeModule { }
