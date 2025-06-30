import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmincarouselRoutingModule } from './admincarousel-routing.module';
import { CarouselsComponent } from './carousels/carousels.component';
import { CarouselsModule } from 'src/app/modules/carousels/carousels.module';


@NgModule({
  declarations: [
    CarouselsComponent
  ],
  imports: [
    CommonModule,
    AdmincarouselRoutingModule,
    CarouselsModule
  ]
})
export class AdmincarouselModule { }
