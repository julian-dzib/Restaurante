import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Service } from './service';
@Injectable({
  providedIn: 'root'
})
export class CarouselService {
  private apiUrl = 'http://127.0.0.1:8000/api/images';

  updateCarousel2(carouselId: number, formData: FormData): Observable<any> {
    return this.http.put(`${this.apiUrl}/${carouselId}`, formData);
  }

  constructor(
    //Importar los servicios
    private carouselService: Service,
    private http: HttpClient
  ) {}

  //Construccion de la url
  getImageUrl(imagePath: string): string {
    // Construye la URL completa de la imagen
    return `http://127.0.0.1:8000/${imagePath}`;
  }

  //Metodo get - Recoger todo el servicio
  getAll() {

    return this.http.get(this.carouselService.API_URL + '/images');
  }

  //Metodo post - Para crear un comentario
  createCarousel(time: any): Observable<any> {
    const url = `${this.carouselService.API_URL}/images`;
    return this.http.post(url, time).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

  //Método delete para eliminar un comentario
  deleteTime(timetId: number): Observable<any> {
    const url = `${this.carouselService.API_URL}/images/${timetId}`;
    return this.http.delete(url).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

  //Metodo update para un comentario
  //updateCarousel(timetId: number, updatedTime: any): Observable<any> {
    //const url = `${this.carouselService.API_URL}/images/${timetId}`;
    //return this.http.put(url, updatedTime).pipe(
      //catchError((error: any) => {
        //return throwError(error);
      //})
    //);
  //}



  //Metodo para filtrar un comentario get por id
  updateCar(id: number, formData: FormData): Observable<any> {
    return this.http.put(`http://127.0.0.1:8000/api/images/${id}`, formData);
  }
}
