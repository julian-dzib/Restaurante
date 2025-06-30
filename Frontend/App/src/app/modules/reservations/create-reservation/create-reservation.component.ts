import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationService } from 'src/app/Services/reservation.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import cookie from 'js-cookie';
import { ReportService } from 'src/app/Services/report.service';
@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrls: ['./create-reservation.component.scss']
})
export class CreateReservationComponent{
  reservationForm: FormGroup;
  list: any[];
  constructor(
    private formBuilder: FormBuilder,
    private reservationService: ReservationService,
    private reportService: ReportService,
    private router: Router
  ) {
    // Inicializar el formulario con validadores si es necesario
    this.reservationForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      arrival_datetime: ['', Validators.required],
      table_number: ['', Validators.required]
    });
  }


  // Método para enviar los datos del nuevo formulario de reservación
  createNewReservation() {
    // Obtener la fecha actual
    const currentDate = new Date();
    const expirationDate = new Date(currentDate);
    expirationDate.setDate(currentDate.getDate() + 30);


    // Verificar si el formulario es válido antes de enviar los datos
    if (this.reservationForm.valid) {
      const formData = this.reservationForm.value;
      this.reservationService.createReservation(formData).subscribe(
        (response) => {
          this.list = response.data.id_reservation;;

          //console.log('Nueva Reservación creada:', response);
          //Creamos la cookie, que toma los datos del usuario que realiz'o la reservaci'on
          //const reservationId = response.data.id_reservation;
          //console.log(this.list);
          cookie.set('reservacion', JSON.stringify(this.list),{expires: expirationDate});
          console.log('Nueva Reservación creada:', response);
          this.reservationForm.reset();
        },
        (error) => {
          console.error('Error al crear la reservación:', error);
        }
      );
    } else {
      // Marcar campos del formulario como tocados para mostrar mensajes de error
      this.markFormGroupTouched(this.reservationForm);
    }
  }



  // Método auxiliar para marcar todos los campos del formulario como tocados
  private markFormGroupTouched(formGroup: FormGroup) {
    (Object as any).values(formGroup.controls).forEach((control: FormGroup) => {
      control.markAsTouched();

      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }

  verficarCookie(){
    // Obtiene la información de la reservación de la cookie
    const reservacion = cookie.get('reservacion');

    // Si hay una cookie con la información de la reservación
    if (reservacion) {
      // Muestra el formulario para editar o cancelar la reservación
      this.router.navigate(['/home/reservation/reservation']);

    }else{
      //this.router.navigate(['/home/reservation/reservation']);
    }
  }
}

