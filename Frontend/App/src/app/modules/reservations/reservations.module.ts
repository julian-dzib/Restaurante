import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationsRoutingModule } from './reservations-routing.module';
//import { TablesComponent } from './tables/tables.component';
import { FormsModule, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ListReservationComponent } from './list-reservation/list-reservation.component';
import { UpdateReservationComponent } from './update-reservation/update-reservation.component';
import { CreateReservationComponent } from './create-reservation/create-reservation.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReservationVistComponent } from '../reservation-vist/reservation-vist.component';
import { ReservationComponent } from '../reservation/reservation.component';

@NgModule({
  declarations: [
    //TablesComponent,
    ListReservationComponent,
    UpdateReservationComponent,
    CreateReservationComponent, 
    ReservationVistComponent, 
    ReservationComponent
  ],
  imports: [
    CommonModule,
    ReservationsRoutingModule, FormsModule, ReactiveFormsModule, ModalModule.forRoot()
  ], exports:[
    ListReservationComponent
  ]
})
export class ReservationsModule { }
