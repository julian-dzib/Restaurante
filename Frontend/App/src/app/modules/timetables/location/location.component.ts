import { Component, OnInit } from '@angular/core';
import { TimetableService } from 'src/app/Services/timetable.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit{
  //Definir un array para mostrar los productos
  list: any[];
  constructor(
    private timeService: TimetableService
  ) { }

  ngOnInit(): void {
   this.getAllTime()
  }

  //Traer todos los comentarios
  getAllTime(){
    this.timeService.getAll().subscribe((res:any)=>{
      this.list = res.data;
    })
  }
}

