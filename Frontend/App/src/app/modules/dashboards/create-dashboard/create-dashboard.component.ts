import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
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
  selector: 'app-create-dashboard',
  templateUrl: './create-dashboard.component.html',
  styleUrls: ['./create-dashboard.component.scss'],
})
export class CreateDashboardComponent {
  /* suge: number = 0;
    sugeMes :   string='';
    //Definir un array para mostrar los productos

  */

  /*
    constructor(
      private commentService: CommentServiceService,
      private reportService: ReportService,

    ) {}

  */

  /*
   lineChart = new Chart({
    chart: {
      type: 'bar',
    },
    title: {
      text: 'Patients',
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: 'Total de Sugerencias',
        data: [0,this.suge],
      } as any,
    ],
  });


  centerChart = new Chart({
    chart: {
      type: 'line',
    },
    title: {
      text: 'Patients',
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: 'Patients admited',
        data: [10, 2, 3, 6, 9, 17, 20, 10, 5, 2, 16],
      } as any,
    ],
  });

  pieChart = new Chart({
    chart: {
      type: 'pie',
      plotShadow: false,
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        innerSize: '99%',
        borderWidth: 10, // Corregido aquí (era borderWitdth)
        borderColor: '',
        slicedOffset: 10,
        dataLabels: {
          connectorWidth: 0,
        },
      },
    },
    title: {
      verticalAlign: 'middle',
      floating: true,
      text: 'Diseases',
    },
    legend: {
      enabled: false,
    },

    series: [
      {
        type: 'pie',
        data: [
          { name: 'covid19', y: 1, color: '#eeeeee' },
          { name: 'hives', y: 2, color: '#393e46' },
          { name: 'ebola', y: 3, color: '#00ad5' },
          { name: 'dispora', y: 4, color: '#eeeeee' },
          { name: 'diabetes', y: 5, color: '#506ef9' },
        ],
      },
    ],
  });
*/
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
