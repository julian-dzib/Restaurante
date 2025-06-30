import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'src/app/Services/reservation.service';
import cookie from 'js-cookie';
import { Reservation } from 'src/app/Shared/reservation';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reservation-vist',
  templateUrl: './reservation-vist.component.html',
  styleUrls: ['./reservation-vist.component.scss']
})
export class ReservationVistComponent implements OnInit {
  //reservation: Reservation|null;
  //list: any[];
  list: Reservation[];
  reservationJson: number | null;
  constructor(
    private reservationService: ReservationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Obtener la cookie del navegador
    const reservation = cookie.get('reservacion');
    //console.log(reservation);

    // Verificar si hay la cookie
    // Verificar si hay la cookie
    if (reservation) {
      //console.log(reservation);
      // Convertir el objeto reservation a un objeto JSON
      this.reservationJson = JSON.parse(reservation);
      //console.log(reservationJson);
      // Obtener el ID de la reservación
      // const reservationId = reservationJson.id_reservation;
      //console.log(reservationId);
      // Obtener la reservación de la base de datos
      this.reservationService
        .getResById(this.reservationJson)
        .subscribe((res: any) => {
          this.list = res.data;
          //console.log(this.list);
        });
    } else {
      // La cookie no existe
      this.list = [];
    }
  }

  //Metodo para eliminar registro
  deleteReservation() {
    if (this.reservationJson) {
      this.reservationService.deleteReservation(this.reservationJson).subscribe(
        () => {
          // Eliminar la cookie de la reservación
          cookie.remove('reservacion');
          this.list = [];
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  confirmDelete(): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('correcto');
        this.deleteReservation();
        this.router.navigate(['/home/reservation/reservation']);
      }
    });
  }
}


