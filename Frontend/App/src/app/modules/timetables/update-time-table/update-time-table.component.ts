import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TimetableService } from 'src/app/Services/timetable.service';

@Component({
  selector: 'app-update-time-table',
  templateUrl: './update-time-table.component.html',
  styleUrls: ['./update-time-table.component.scss']
})
export class UpdateTimeTableComponent {
  updatedTime: any = { id: 0, day: '', start_time_one:'', end_time_one:'', start_time_two:'',end_time_two:'' }; // Añade un campo 'id' para almacenar el ID del comentario

  constructor(private timeService: TimetableService, private route: ActivatedRoute, public router:  Router,    public formBuilder: FormBuilder
    ) {
    this.route.params.subscribe(params => {
    this.updatedTime.id = +params['id']; // Obtén el ID del comentario de la URL y almacénalo en updatedComment.id
  });
  }

  updateTime() {
    this.timeService.updateTime(this.updatedTime.id, this.updatedTime).subscribe(
      (response: any) => {
        console.log('Time updated:', response);
        this.router.navigate(['/admon/TimeList'])
      },
      (error: any) => {
        console.error('Error updating Time', error);
      }
    );
  }
}
