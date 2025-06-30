import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminreservationRoutingModule } from './adminreservation-routing.module';
import { ReservationsComponent } from './reservations/reservations.component';
import { ReservationsModule } from 'src/app/modules/reservations/reservations.module';

@NgModule({
  declarations: [
    ReservationsComponent
  ],
  imports: [
    CommonModule,
    AdminreservationRoutingModule,
    ReservationsModule
  ]
})
export class AdminreservationModule { }
