import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselsComponent } from './carousels/carousels.component';

const routes: Routes = [
  { path: '', component:CarouselsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmincarouselRoutingModule { }
