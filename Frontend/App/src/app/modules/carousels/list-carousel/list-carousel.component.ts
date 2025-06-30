import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service'; //auth
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-carousel',
  templateUrl: './list-carousel.component.html',
  styleUrls: ['./list-carousel.component.scss']
})
export class ListCarouselComponent implements OnInit {
  carousels: any[] = []; // Define un arreglo para almacenar los elementos del carrusel

  constructor(
    private authService: AuthenticationService,//Se agrega esto para auth del login
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router) {}

    ngOnInit(): void {
      // Verifica si el usuario ha iniciado sesión al cargar el componente
      this.authService.status().subscribe((loggedIn: boolean) => {
        if (!loggedIn) {
          // Si no ha iniciado sesión, redirige a la página de inicio de sesión
          this.router.navigate(['/login']);
        } else {
          // Si ha iniciado sesión, llama al servicio
          this.getCarousels();
        }
      });
    } //Hasta aqui se copia

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
        },
        (error) => {
          console.error(error);
        }
      );
  }


  deleteCarousel(id: number): void {
   // Realizar una solicitud HTTP DELETE para eliminar el carrusel
   this.http.delete(`http://127.0.0.1:8000/api/images/${id}`)
   .subscribe(
     (response: any) => {
       console.log(response);
       this.getCarousels();
     },
     (error) => {
       console.error(error);
     }
   );
  }


  confirmDelete(id: number): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
      this.deleteCarousel(id);
    }
  });
}

}
