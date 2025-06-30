import {  ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { CommentServiceService } from 'src/app/Services/comment-service.service';
import { ReportService } from 'src/app/Services/report.service';
import { ReservationService } from 'src/app/Services/reservation.service';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

export type ChartOptions2 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],

})
export class HelloComponent{
  
    //@ViewChild('chart') chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;
    //@ViewChild('chart2') chart2: ChartComponent;
    public chartOptions2: Partial<ChartOptions2>;
    @ViewChild("chart") chart: ChartComponent;
    public chartOptions3: Partial<ChartOptions>;
  
    //Varibles para controlar el dash de sugerencias
    //list: any[] = [];
    mes: string[] = [];
    total: number[] = [];
    //Variables para controlar el dash de servations
    mes2: string[] = [];
    total2: number[]=[];
    constructor(
      //Servicio para sugerencias
      private commentService: CommentServiceService,
      //Servicio para reservaciones
      private suggestService: ReservationService,
      //Servicio para el reporte
      private changeDetectorRef: ChangeDetectorRef
    ) {
    }
  
    ngOnInit(): void {
      this.getAllComments();
      this.getAllReservations();
      this.getGraficos();
    }
  
    //Traer todos los comentarios
    getAllComments() {
      this.commentService.getAll().subscribe((res: any) => {
        //this.list = res.data;
        this.mes.push(res.mesActual);
        const totalSuggestion = res.totalSuggestions;
        this.total.push(totalSuggestion);
        // Actualizar la info del data
        this.chartOptions.series[0].data = this.total;
        this.chartOptions.xaxis.categories = this.mes;
        // Trigger change detection
        this.changeDetectorRef.detectChanges();
        });
    }
  
    getAllReservations(){
      //Llamar al servicio
      this.suggestService.getAll().subscribe((res:any)=>{
      this.mes2.push(res.mesActual2);
      const totalReservation = res.total_reservation;
      this.total2.push(totalReservation);
      //Actualizar la info del dash
      this.chartOptions2.series[0].data= this.total2;
      this.chartOptions2.xaxis.categories = this.mes2;
        // Trigger change detection
      this.changeDetectorRef.detectChanges();
        console.log(this.total2);
        console.log(this.mes2);
      });
    }
  
    getGraficos(){
  
      //Grafico para las sugerencias totales
      this.chartOptions = {
        series: [
          {
            name: 'Sugerencias',
            data: [this.total],
          },
        ],
        chart: {
          height: 200,
          type: 'bar',
        },
        title: {
          text: 'Total de Sugerencias Mensuales',
        },
        xaxis: {
          categories: [this.mes],
        },
      };
  
  
      //Grafico para las reservaciones totales
      this.chartOptions2 = {
        series: [
          {
            name: 'Reservaciones',
            data: [this.total2],
          },
        ],
        chart: {
          height: 200,
          type: 'bar',
  
        },
        title: {
          text: 'Total de Reservaciones Mensual',
        },
        xaxis: {
          categories: [this.mes2],
        },
      };
    }
}