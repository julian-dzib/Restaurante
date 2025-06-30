import { Injectable } from '@angular/core';
import { Service } from './service';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(
    //Importar los servicios
    private reservationService: Service,
    private http: HttpClient
  ) {}
  //Metodo get - Recoger todo el servicio
  getAll() {
    return this.http.get(this.reservationService.API_URL + '/reservations');
  }

  //Metodo get - Para traer todos las reservaciones y el total de reservaciones
  getAllCount(){
    return this.http.get(this.reservationService.API_URL + '/reservationss');
  }
  //Metodo post - Para crear una reservacion
  createReservation(reserva: any): Observable<any> {
    const url = `${this.reservationService.API_URL}/reservations`;
    return this.http.post(url, reserva).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }
  // Método para eliminar una reservacion
  deleteReservation(reservatId: number): Observable<any> {
    const url = `${this.reservationService.API_URL}/reservations/${reservatId}`;
    return this.http.delete(url).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }
  //Metodo para filtrar un comentario get por id
  getResById(reservatId: number): Observable<any> {
    const url = `${this.reservationService.API_URL}/reservations/${reservatId}`;
    return this.http.get(url).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

  //Metodo para actualizar un comentario put
  updateReservation(reservatId: number, reservaTime: any): Observable<any> {
    const url = `${this.reservationService.API_URL}/reservations/${reservatId}`;
    return this.http.put(url, reservaTime).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

}

