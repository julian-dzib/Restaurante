import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuggesComponent } from './sugges/sugges.component';

const routes: Routes = [
  { path: '', component:SuggesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminsuggesRoutingModule { }
