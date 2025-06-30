import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { HelloComponent } from './hello/hello.component';
//import { ChartModule } from 'angular-highcharts';
import { DashboardsModule } from 'src/app/modules/dashboards/dashboards.module';
import { NgApexchartsModule } from 'ng-apexcharts';


@NgModule({
  declarations: [
    HelloComponent,
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    //ChartModule,
    NgApexchartsModule,
    DashboardsModule
  ]
})
export class WelcomeModule { }
