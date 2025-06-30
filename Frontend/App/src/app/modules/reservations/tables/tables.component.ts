import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationService } from 'src/app/Services/reservation.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  reservationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private reservationService: ReservationService,
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

  ngOnInit(): void {}

  // Método para enviar los datos del nuevo formulario de reservación
  createNewReservation() {
    // Verificar si el formulario es válido antes de enviar los datos
    if (this.reservationForm.valid) {
      const formData = this.reservationForm.value;
      this.reservationService.createReservation(formData).subscribe(
        (response) => {
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
}
