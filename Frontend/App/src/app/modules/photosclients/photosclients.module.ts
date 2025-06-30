import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotosclientsRoutingModule } from './photosclients-routing.module';
import { PhotosComponent } from './photos/photos.component';


@NgModule({
  declarations: [
    PhotosComponent
  ],
  imports: [
    CommonModule,
    PhotosclientsRoutingModule
  ]
})
export class PhotosclientsModule { }
