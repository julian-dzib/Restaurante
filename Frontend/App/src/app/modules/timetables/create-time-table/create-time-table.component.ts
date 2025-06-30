import { Component, OnInit, NgZone } from '@angular/core';
import { TimetableService } from 'src/app/Services/timetable.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-create-time-table',
  templateUrl: './create-time-table.component.html',
  styleUrls: ['./create-time-table.component.scss']
})
export class CreateTimeTableComponent implements OnInit {
  // Define una variable para almacenar los datos del nuevo horario
  newTime: any = {
    day: '',
    start_time_one: '',
    end_time_one: '',
    start_time_two: '',
    end_time_two: ''
  };

  constructor(private timeService: TimetableService, public router:  Router) { }

  ngOnInit(): void {

  }

  // Método para enviar los datos del nuevo horario al servidor
  createNewTime() {
    this.timeService.createTime(this.newTime).subscribe(
      (response) => {
        console.log('Nuevo horario creado:', response);
        this.router.navigate(['/admon/TimeList'])
      },
      (error) => {
        console.error('Error al crear el horario:', error);
        // Puedes manejar el error aquí
      }
    );
  }
}
