import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { CarouselComponent } from './carousel/carousel.component';
import { ListCarouselComponent } from './list-carousel/list-carousel.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CreateCarouselComponent } from './create-carousel/create-carousel.component';
import { UpdateCarouselComponent } from './update-carousel/update-carousel.component';
import { CarouselVistComponent } from './carousel-vist/carousel-vist.component';
const routes: Routes = [
  { path: '', component:CarouselVistComponent},
  {path:'carousel-add', component:CreateCarouselComponent},
  {path:'carousel-list', component:ListCarouselComponent},
  {path:'carousel-update/:id', component:UpdateCarouselComponent}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarouselsRoutingModule { }
