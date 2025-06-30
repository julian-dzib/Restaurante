import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class Service {

  //Api a consumir
  API_URL= "http://127.0.0.1:8000/api"
 constructor(private httpClient: HttpClient) { }

}
