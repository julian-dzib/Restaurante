import { Component, OnInit } from '@angular/core';
import { TimetableService } from 'src/app/Services/timetable.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service'; 
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-time-table',
  templateUrl: './list-time-table.component.html',
  styleUrls: ['./list-time-table.component.scss']
})
export class ListTimeTableComponent implements OnInit{
  //Definir un array para mostrar los horarios
  list: any[];

  constructor(
    private timeService: TimetableService,
    private router: Router,
    private authService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.authService.status().subscribe((loggedIn: boolean) => {
      if (!loggedIn) {
        this.router.navigate(['/login'])
      } else {
        this.getAllTime();
      }
    });
  }

  //Traer todos los comentarios
  getAllTime(){
    this.timeService.getAll().subscribe((res:any)=>{
      this.list = res.data;
    })
  }

  //Metodo para eliminar registro
  deleteTime(timeId: number) {
    this.timeService.deleteTime(timeId).subscribe(
      () => {
        this.getAllTime(); // Vuelve a cargar la lista después de eliminar un comentario
      },
      (error: any) => {
        console.error('Error deleting comment', error);
      }
    );
  }

  confirmDelete(id: number): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
      this.deleteTime(id);
    }
  });
}
}


