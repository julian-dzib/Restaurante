import { Injectable } from '@angular/core';
import { Service } from './service';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TimetableService {

  constructor(
    //Importar los servicios
    private timeTableService: Service,
    private http: HttpClient
  ) {}
  //Metodo get - Recoger todo el servicio
  getAll() {
    return this.http.get(this.timeTableService.API_URL + '/times');
  }
  //Metodo post - Para crear un comentario
  createTime(time: any): Observable<any> {
    const url = `${this.timeTableService.API_URL}/times`;
    return this.http.post(url, time).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }
  // Método para eliminar un comentario
  deleteTime(timetId: number): Observable<any> {
    const url = `${this.timeTableService.API_URL}/times/${timetId}`;
    return this.http.delete(url).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }
  //Metodo para filtrar un comentario get por id
  getTimeById(timetId: number): Observable<any> {
    const url = `${this.timeTableService.API_URL}/times/${timetId}`;
    return this.http.get(url).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

  //Metodo para actualizar un comentario put
  updateTime(timetId: number, updatedTime: any): Observable<any> {
    const url = `${this.timeTableService.API_URL}/times/${timetId}`;
    return this.http.put(url, updatedTime).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

}

