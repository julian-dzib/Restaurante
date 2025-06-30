import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InitialRoutingModule } from './initial-routing.module';
import { InitialComponent } from './initial.component';
import { HeaderComponent } from '../../components/header/header.component';
import { BarComponent } from '../../components/bar/bar.component';

@NgModule({
  declarations: [
    InitialComponent,
    HeaderComponent,
    BarComponent
  ],
  imports: [
    CommonModule,
    InitialRoutingModule
  ]
})
export class InitialModule { }
