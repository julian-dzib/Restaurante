import { Injectable } from '@angular/core';
import { Service } from './service';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class CommentServiceService {

  constructor(
    //Importar los servicios
    private sugestService: Service,
    private http: HttpClient
  ) {}
  //Metodo get - Recoger todo el servicio
  getAll() {
    return this.http.get(this.sugestService.API_URL + '/suggestions');
  }
  //Metodo post - Para crear un comentario
  createComment(comment: any): Observable<any> {
    const url = `${this.sugestService.API_URL}/suggestions`;
    return this.http.post(url, comment).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }
  // Método para eliminar un comentario
  deleteComment(commentId: number): Observable<any> {
    const url = `${this.sugestService.API_URL}/suggestions/${commentId}`;
    return this.http.delete(url).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }
  //Metodo para filtrar un comentario get por id
  getCommentById(commentId: number): Observable<any> {
    const url = `${this.sugestService.API_URL}/suggestions/${commentId}`;
    return this.http.get(url).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

  //Metodo para actualizar un comentario put
  updateComment(commentId: number, updatedComment: any): Observable<any> {
    const url = `${this.sugestService.API_URL}/suggestions/${commentId}`;
    return this.http.put(url, updatedComment).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }
}
