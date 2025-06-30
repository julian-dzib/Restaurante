import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-about',
  templateUrl: './create-about.component.html',
  styleUrls: ['./create-about.component.scss']
})
export class CreateAboutComponent{
  history: string;
  selectedFile: File;

  constructor(private http: HttpClient,public router:  Router) {}

  onFileSelected(event): void {
    this.selectedFile = event.target.files[0];
  }

  uploadImage(): void {
    if (!this.selectedFile) {
      return;
    }

    const formData = new FormData();
    formData.append('history', this.history);
    formData.append('image', this.selectedFile);

    // Configuración correcta de encabezados
    const headers = new HttpHeaders({
      'Accept': 'application/json'
    });

    this.http.post('http://127.0.0.1:8000/api/abouts', formData, { headers: headers })
      .subscribe(
        (response: any) => {
          console.log(response);
          this.router.navigate(['/admon/AboutList'])
        },
        (error) => {
          console.error(error);
        }
      );

    // Limpiar el formulario después de cargar la imagen
    this.history = null;
    this.selectedFile = null;
  }
}

