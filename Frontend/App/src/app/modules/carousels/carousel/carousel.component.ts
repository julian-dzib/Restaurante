import { Component, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
    carousels: any[] = []; // Define un arreglo para almacenar los elementos del carrusel

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
      // Llama al servicio para obtener los elementos del carrusel al inicializar el componente
      this.getCarousels();
    }
    getImageUrl(imagePath: string): string {
      // Construye la URL completa de la imagen
      return `http://127.0.0.1:8000/${imagePath}`;
    }
    getCarousels(): void {
      const apiUrl = 'http://127.0.0.1:8000/api/images';

      this.http.get(apiUrl)
        .subscribe(
          (data: any[]) => {
            this.carousels = data;
            console.log(data);
          },
          (error) => {
            console.error(error);
            console.log(error);

          }
        );
    }
 }
