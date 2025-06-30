import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablesComponent } from './tables/tables.component';
import { CreateReservationComponent } from './create-reservation/create-reservation.component';
import { ListReservationComponent } from './list-reservation/list-reservation.component';
import { UpdateReservationComponent } from './update-reservation/update-reservation.component';
import { ReservationVistComponent } from '../reservation-vist/reservation-vist.component';
import { ReservationComponent } from '../reservation/reservation.component';


const routes: Routes = [
  {path: '', component:CreateReservationComponent},
  {path:'reservation-list', component:ListReservationComponent},
  {path:'reservation-update/:id', component:UpdateReservationComponent},
  {path:'reservation', component:ReservationComponent}
];

/*const routes: Routes = [
  { path: '', component:TablesComponent},
];*/


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationsRoutingModule { }
