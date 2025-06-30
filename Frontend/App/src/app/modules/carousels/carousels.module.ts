import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CarouselsRoutingModule } from './carousels-routing.module';
import { ListCarouselComponent } from './list-carousel/list-carousel.component';
import { UpdateCarouselComponent } from './update-carousel/update-carousel.component';
import { CreateCarouselComponent } from './create-carousel/create-carousel.component';
import { CarouselVistComponent } from './carousel-vist/carousel-vist.component';

@NgModule({
  declarations: [
    ListCarouselComponent,
    UpdateCarouselComponent,
    CreateCarouselComponent,
    CarouselVistComponent
  ],
  imports: [
    CommonModule,
    CarouselsRoutingModule,
    ReactiveFormsModule, // Importa ReactiveForms para formularios reactivos
    FormsModule, // Importa FormsModule si también utilizas formularios de plantilla (template-driven)
  ],exports:[
    ListCarouselComponent
  ]
})
export class CarouselsModule { }
