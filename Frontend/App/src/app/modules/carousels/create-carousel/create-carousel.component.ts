import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarouselService } from 'src/app/Services/carousel.service';

@Component({
  selector: 'app-create-carousel',
  templateUrl: './create-carousel.component.html',
  styleUrls: ['./create-carousel.component.scss']
})
export class CreateCarouselComponent implements OnInit {
  description: string;
  selectedFile: File;

  constructor(private http: HttpClient,public router:  Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onFileSelected(event): void {
    this.selectedFile = event.target.files[0];
  }

  uploadImage(): void {
    if (!this.selectedFile) {
      return;
    }

    const formData = new FormData();
    formData.append('description', this.description);
    formData.append('image', this.selectedFile);

    // Configuración correcta de encabezados
    const headers = new HttpHeaders({
      'Accept': 'application/json'
    });

    this.http.post('http://127.0.0.1:8000/api/images', formData, { headers: headers })
      .subscribe(
        (response: any) => {
          console.log(response);
          this.router.navigate(['/admon/CarouselList'])
        },
        (error) => {
          console.error(error);
          // Puedes manejar el error aquí
        }
      );

    // Limpiar el formulario después de cargar la imagen
    this.description = null;
    this.selectedFile = null;
  }
}
