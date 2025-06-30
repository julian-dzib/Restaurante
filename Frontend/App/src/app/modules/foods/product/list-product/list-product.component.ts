import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service'; 
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  product: any[] = []; // Define un arreglo para almacenar los elementos del carrusel

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService
    ) {}

  ngOnInit(): void {
    this.authService.status().subscribe((loggedIn: boolean) => {
      if (!loggedIn) {
        this.router.navigate(['/login'])
      } else {
    // Llama al servicio para obtener los elementos del carrusel al inicializar el componente
    this.getProduct();
      }
    });
  }
  getImageUrl(imagePath: string): string {
    // Construye la URL completa de la imagen
    return `http://127.0.0.1:8000/${imagePath}`;
  }
  getProduct(): void {
    const apiUrl = 'http://127.0.0.1:8000/api/products';

    this.http.get(apiUrl)
      .subscribe(
        (data: any[]) => {
          this.product = data;
        },
        (error) => {
          console.error(error);
          // Maneja el error según tus necesidades
        }
      );
  }


  deleteProduct(id: number): void {
   // Realizar una solicitud HTTP DELETE para eliminar el carrusel
   this.http.delete(`http://127.0.0.1:8000/api/products/${id}`)
   .subscribe(
     (response: any) => {
       console.log(response);
       this.getProduct();
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
      this.deleteProduct(id);
    }
  });
}

}

