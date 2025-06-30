import { Component, OnInit , ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from 'src/app/Services/reservation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-reservation',
  templateUrl: './update-reservation.component.html',
  styleUrls: ['./update-reservation.component.scss']
})
export class UpdateReservationComponent implements OnInit {
  updatedReservationForm: FormGroup;
  showUpdateForm: boolean = false;
  constructor(
    private reservationService: ReservationService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.updatedReservationForm = this.formBuilder.group({
      id_reservation: [0], // Valor inicial para id
      name: ['', Validators.required],
      phone: ['', Validators.required],
      arrival_datetime: ['', Validators.required],
      table_number: ['', Validators.required]
    });

    this.route.params.subscribe(params => {
      this.updatedReservationForm.patchValue({
        id_reservation: +params['id']
      });
    });
  }

  ngOnInit(): void {}

  updateReservation() {
    const formData = this.updatedReservationForm.value;
    this.reservationService.updateReservation(formData.id_reservation, formData).subscribe(
      (response: any) => {
        console.log('Reservation updated:', response);
        this.router.navigate(['/admon/ReservationList']);
      },
      (error: any) => {
        //console.error('Error updating Reservation', error);
      }
    );
  }
}
