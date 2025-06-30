import { Injectable } from '@angular/core';
import { Service } from './service';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(
    //Importar los servicios
    private cateService: Service,
    private http: HttpClient
  ) {}
  //Metodo get - Recoger todo el servicio
  getAll() {
    return this.http.get(this.cateService.API_URL + '/categories');
  }
  //Metodo post - Para crear una categoria
  createCategorie(cate: any): Observable<any> {
    const url = `${this.cateService.API_URL}/categories`;
    return this.http.post(url, cate).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }
  // Método para eliminar una categoria
  deleteCategorie(cateId: number): Observable<any> {
    const url = `${this.cateService.API_URL}/categories/${cateId}`;
    return this.http.delete(url).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }
  //Metodo para filtrar un categoria get por id
  getCategorieById(cateId: number): Observable<any> {
    const url = `${this.cateService.API_URL}/categories/${cateId}`;
    return this.http.get(url).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

  //Metodo para actualizar un categoria put
  updateCategorie(cateId: number, updatedCate: any): Observable<any> {
    const url = `${this.cateService.API_URL}/categories/${cateId}`;
    return this.http.put(url, updatedCate).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }
}
