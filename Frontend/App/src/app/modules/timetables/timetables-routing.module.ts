import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './location/location.component';
import { CreateTimeTableComponent } from './create-time-table/create-time-table.component';
import { ListTimeTableComponent } from './list-time-table/list-time-table.component';
import { UpdateTimeTableComponent } from './update-time-table/update-time-table.component';

const routes: Routes = [
  { path: '', component:LocationComponent},
  {path:'time-add', component:CreateTimeTableComponent},
  {path:'time-list', component:ListTimeTableComponent},
  {path:'update-time/:id', component:UpdateTimeTableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimetablesRoutingModule { }
