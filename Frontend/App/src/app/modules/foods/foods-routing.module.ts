import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheescakesComponent } from './cheescakes/cheescakes.component';
import { ListCategorieComponent } from './categorie/list-categorie/list-categorie.component';
import { UpdateCategorieComponent } from './categorie/update-categorie/update-categorie.component';
import { CreateCategorieComponent } from './categorie/create-categorie/create-categorie.component';
import { CreateProductComponent } from './product/create-product/create-product.component';
import { ListProductComponent } from './product/list-product/list-product.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';


const routes: Routes = [
  { path: '', component:CheescakesComponent},
  //Redireccionamiento para las categorias

  {path:'categorie-add', component:CreateCategorieComponent},
  {path:'categorie-list', component:ListCategorieComponent},
  {path:'categorie-update/:id', component:UpdateCategorieComponent},
  //Redireccionamiento para los productos
  {path:'product-add', component:CreateProductComponent},
  {path:'product-list', component:ListProductComponent},
  {path:'product-update/:id', component:UpdateProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodsRoutingModule { }
