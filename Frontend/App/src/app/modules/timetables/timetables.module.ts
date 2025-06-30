import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimetablesRoutingModule } from './timetables-routing.module';
import { LocationComponent } from './location/location.component';
import { ListTimeTableComponent } from './list-time-table/list-time-table.component';
import { UpdateTimeTableComponent } from './update-time-table/update-time-table.component';
import { CreateTimeTableComponent } from './create-time-table/create-time-table.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LocationComponent,
    ListTimeTableComponent,
    UpdateTimeTableComponent,
    CreateTimeTableComponent
  ],
  imports: [
    CommonModule,
    TimetablesRoutingModule, FormsModule ///importar forms y demas si lo ocupo
  ],exports:[
    ListTimeTableComponent,
    CreateTimeTableComponent
  ]
})
export class TimetablesModule { }
