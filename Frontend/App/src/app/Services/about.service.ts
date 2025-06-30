import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Service } from './service';
@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private apiUrl = 'http://127.0.0.1:8000/api/abouts';

  updateAbouts(aboutslId: number, formData: FormData): Observable<any> {
    return this.http.put(`${this.apiUrl}/${aboutslId}`, formData);
  }

  constructor(
    //Importar los servicios
    private aboutsService: Service,
    private http: HttpClient
  ) { }

  //Construccion de la url
  getImageUrl(imagePath: string): string {
    // Construye la URL completa de la imagen
    return `http://127.0.0.1:8000/${imagePath}`;
  }

  //Metodo get - Recoger todo el servicio
  getAll() {
    return this.http.get(this.aboutsService.API_URL + '/abouts');
  }

  //Metodo post - Para crear un comentario
  createCarousel(ab: any): Observable<any> {
    const url = `${this.aboutsService.API_URL}/abouts`;
    return this.http.post(url, ab).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

  //Método delete para eliminar un comentario
  deleteTime(aboutstId: number): Observable<any> {
    const url = `${this.aboutsService.API_URL}/images/${aboutstId}`;
    return this.http.delete(url).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }
}
