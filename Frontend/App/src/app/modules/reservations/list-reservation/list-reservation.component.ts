import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'src/app/Services/reservation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import Swal from 'sweetalert2';
import { Reservation } from 'src/app/Shared/reservation';
import { ReportService } from 'src/app/Services/report.service';
import jsPDF from 'jspdf';
import { Options } from '@popperjs/core';
import { UserOptions } from 'jspdf-autotable';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-list-reservation',
  templateUrl: './list-reservation.component.html',
  styleUrls: ['./list-reservation.component.scss']
})
export class ListReservationComponent implements OnInit{
  //Definir un array para mostrar las reservacio
  list: any[]; total: any[];
  //list2: Reservation[] = [];
  ress: any;  list2: Reservation[];
  constructor(
    private reservationService: ReservationService,
    private router: Router,
    private authService: AuthenticationService, private reportService:ReportService
  ) { }

  ngOnInit(): void {
    this.authService.status().subscribe((loggedIn: boolean) => {
      if (!loggedIn) {
        this.router.navigate(['/login'])
      } else {
        this.getAllReservation();
      }
    });
  }

  //Traer todos las reservacio
  getAllReservation(){
    this.reservationService.getAll().subscribe((res:any)=>{
      this.list = res.data;
      this.total= res.total_reservation;
    })
  }
  generatePDF() {
  const encabezados = ['Usuario', 'Teléfono', 'Número de Mesa', 'Fecha de Registro', ];
    // Mapea tus datos a un formato que pueda ser usado por autoTable
  const body = this.list.map(campo => [
    campo.name,
    campo.phone,
    campo.table_number,
    campo.arrival_datetime,

  ]);
  const foot=['','','Total de Reservaciones: ', this.total];
    //const body = this.list.map(item => [item.name, item.phone, item.arrival_datetime]);
  const title = 'Reservaciones';

    // Llama al servicio para generar el informe
    this.reportService.getReport2(encabezados, body, foot, title, false);
  }
  //Metodo para eliminar registro
  deleteReservation(timeId: number) {
    this.reservationService.deleteReservation(timeId).subscribe(
      () => {
        this.getAllReservation(); // Vuelve a cargar la lista después de eliminar un comentario
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
      this.deleteReservation(id);
    }
  });
}


}


