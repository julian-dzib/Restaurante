import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Importar los componentes
import { CreateSuggestionComponent } from './create-suggestion/create-suggestion.component';
import { ListSuggestionComponent } from './list-suggestion/list-suggestion.component';
import { UpdateSuggestionComponent } from './update-suggestion/update-suggestion.component';
const routes: Routes = [
    {path:'', component:CreateSuggestionComponent},
    {path:'comment-list', component:ListSuggestionComponent},
    {path:'update-comment/:id', component:UpdateSuggestionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuggestionRoutingModule { }
