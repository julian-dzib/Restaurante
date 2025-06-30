import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutsRoutingModule } from './abouts-routing.module';
import { HistoryComponent } from './history/history.component';
import { CreateAboutComponent } from './create-about/create-about.component';
import { ListAboutComponent } from './list-about/list-about.component';
import { UpdateAboutComponent } from './update-about/update-about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HistoryComponent,
    CreateAboutComponent,
    ListAboutComponent,
    UpdateAboutComponent
  ],
  imports: [
    CommonModule,
    AboutsRoutingModule,
    ReactiveFormsModule, // Importa ReactiveForms para formularios reactivos
    FormsModule, // Importa FormsModule si también utilizas formularios de plantilla (template-driven)

  ],exports:[
    ListAboutComponent
  ]
})
export class AboutsModule { }
