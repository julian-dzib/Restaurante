import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmindashboardRoutingModule } from './admindashboard-routing.module';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { DashboardsModule } from 'src/app/modules/dashboards/dashboards.module';


@NgModule({
  declarations: [
    DashboardsComponent
  ],
  imports: [
    CommonModule,
    AdmindashboardRoutingModule,
    DashboardsModule
  ]
})
export class AdmindashboardModule { }
