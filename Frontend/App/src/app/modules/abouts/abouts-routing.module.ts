import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { CreateAboutComponent } from './create-about/create-about.component';
import { ListAboutComponent } from './list-about/list-about.component';
import { UpdateAboutComponent } from './update-about/update-about.component';

const routes: Routes = [
  { path: '', component:HistoryComponent},
  { path: 'about-add', component:CreateAboutComponent},
  { path: 'about-list', component:ListAboutComponent},
  { path: 'about-update/:id', component:UpdateAboutComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutsRoutingModule { }
