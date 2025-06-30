import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardsRoutingModule } from './dashboards-routing.module';
import { CreateDashboardComponent } from './create-dashboard/create-dashboard.component';
import { ChartModule } from 'angular-highcharts';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [
    CreateDashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardsRoutingModule,
    //ChartModule,
    NgApexchartsModule
  ], exports:[
    CreateDashboardComponent
  ]
})
export class DashboardsModule { }
