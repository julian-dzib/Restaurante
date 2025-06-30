import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmintimeRoutingModule } from './admintime-routing.module';
import { TimesComponent } from './times/times.component';
import { TimetablesModule } from 'src/app/modules/timetables/timetables.module';


@NgModule({
  declarations: [
    TimesComponent
  ],
  imports: [
    CommonModule,
    AdmintimeRoutingModule,
    TimetablesModule
  ]
})
export class AdmintimeModule { }
