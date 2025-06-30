import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminaboutRoutingModule } from './adminabout-routing.module';
import { AboutsComponent } from './abouts/abouts.component';
import { AboutsModule } from 'src/app/modules/abouts/abouts.module';


@NgModule({
  declarations: [
    AboutsComponent
  ],
  imports: [
    CommonModule,
    AdminaboutRoutingModule,
    AboutsModule
  ]
})
export class AdminaboutModule { }
