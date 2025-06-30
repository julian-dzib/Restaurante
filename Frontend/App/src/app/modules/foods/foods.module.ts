import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodsRoutingModule } from './foods-routing.module';
import { DrinksComponent } from './drinks/drinks.component';
import { CheescakesComponent } from './cheescakes/cheescakes.component';
import { AppetizersComponent } from './appetizers/appetizers.component';
import { MuffinsComponent } from './muffins/muffins.component';
import { CakesComponent } from './cakes/cakes.component';
import { CookiesComponent } from './cookies/cookies.component';
import { CreateProductComponent } from './product/create-product/create-product.component';
import { ListProductComponent } from './product/list-product/list-product.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { UpdateCategorieComponent } from './categorie/update-categorie/update-categorie.component';
import { CreateCategorieComponent } from './categorie/create-categorie/create-categorie.component';
import { ListCategorieComponent } from './categorie/list-categorie/list-categorie.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DrinksComponent,
    CheescakesComponent,
    AppetizersComponent,
    MuffinsComponent,
    CakesComponent,
    CookiesComponent,

    CreateProductComponent,
    ListProductComponent,
    UpdateProductComponent,

    UpdateCategorieComponent,
    CreateCategorieComponent,
    ListCategorieComponent
  ],
  imports: [
    CommonModule,
    FoodsRoutingModule,  ReactiveFormsModule, // Importa ReactiveForms para formularios reactivos
    FormsModule, // Importa FormsModule si también utilizas formularios de plantilla (template-driven)

  ],exports:[
    ListCategorieComponent,
    ListProductComponent
  ]
})
export class FoodsModule { }
