import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CarouselService } from 'src/app/Services/carousel.service';

@Component({
  selector: 'app-update-carousel',
  templateUrl: './update-carousel.component.html',
  styleUrls: ['./update-carousel.component.scss'],
})
export class UpdateCarouselComponent implements OnInit {
  description: string;
  selectedFile: File;
  carouselId: number;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    public router: Router
  ) {}

  ngOnInit(): void {
    // Obtener el ID del carrusel desde la ruta
    this.route.params.subscribe((params) => {
      this.carouselId = +params['id']; // Asegúrate de que el nombre del parámetro coincida con el usado en la ruta
      // Lógica adicional de inicialización según sea necesario
    });
  }

  onFileSelected(event): void {
    this.selectedFile = event.target.files[0];
  }

  uploadImage(): void {
    const formData = new FormData();
    formData.append('description', this.description);

    // Check if a new image is selected
    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }

    this.http.put(`http://127.0.0.1:8000/api/images/${this.carouselId}`, formData, {
        headers: this.getHeaders(),
      })
      .subscribe(
        (response: any) => {

          console.log(response);
          // Clear the form after uploading the image
          this.description = null;
          this.selectedFile = null;

          this.router.navigate(['/admon/CarouselList']);
        },
        (error) => {
          console.error(error);    console.log(formData), this.carouselId ;

          // Handle error
        }
      );
  }
  getHeaders() {
    // Set appropriate headers for the API request
    return new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'multipart/form-data'
    });
  }
}
