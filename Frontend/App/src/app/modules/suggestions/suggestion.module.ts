import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuggestionRoutingModule } from './suggestion-routing.module';
import { CreateSuggestionComponent } from './create-suggestion/create-suggestion.component';
import { ListSuggestionComponent } from './list-suggestion/list-suggestion.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UpdateSuggestionComponent } from './update-suggestion/update-suggestion.component';

@NgModule({
  declarations: [
    CreateSuggestionComponent,
    ListSuggestionComponent,
    UpdateSuggestionComponent
  ],
  imports: [
    CommonModule,
    SuggestionRoutingModule,
    ReactiveFormsModule, // Importa ReactiveForms para formularios reactivos
    FormsModule, // Importa FormsModule si también utilizas formularios de plantilla (template-driven)
  ], exports:[
    ListSuggestionComponent
  ]
})
export class SuggestionModule { }
