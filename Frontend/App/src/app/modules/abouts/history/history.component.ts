import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  abouts: any[] = []; // Define un arreglo para almacenar los elementos del carrusel

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Llama al servicio para obtener los elementos del carrusel al inicializar el componente
    this.getAbouts();
  }
  getImageUrl(imagePath: string): string {
    // Construye la URL completa de la imagen
    return `http://127.0.0.1:8000/${imagePath}`;
  }
  getAbouts(): void {
    const apiUrl = 'http://127.0.0.1:8000/api/abouts';

    this.http.get(apiUrl)
      .subscribe(
        (data: any[]) => {
          this.abouts = data;
          console.log(data);
        },
        (error) => {
          console.error(error);
          console.log(error);

        }
      );
  }
}

