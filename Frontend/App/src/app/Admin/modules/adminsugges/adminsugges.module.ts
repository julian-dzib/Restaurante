  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';

  import { AdminsuggesRoutingModule } from './adminsugges-routing.module';
  import { SuggesComponent } from './sugges/sugges.component';
  import { SuggestionModule } from 'src/app/modules/suggestions/suggestion.module';

  @NgModule({
    declarations: [
      SuggesComponent,
    ],
    imports: [
      CommonModule,
      AdminsuggesRoutingModule,
      SuggestionModule
    ]
  })
  export class AdminsuggesModule { }
