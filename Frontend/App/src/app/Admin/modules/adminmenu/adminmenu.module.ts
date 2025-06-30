import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminmenuRoutingModule } from './adminmenu-routing.module';
import { MenusComponent } from './menus/menus.component';
import { FoodsModule } from 'src/app/modules/foods/foods.module';
@NgModule({
  declarations: [
    MenusComponent
  ],
  imports: [
    CommonModule,
    AdminmenuRoutingModule, FoodsModule
  ]
})
export class AdminmenuModule { }

