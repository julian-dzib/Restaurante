import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  selectedFile: File;
  name_product: string;
  description_product: string;
  precio: any;
  id_categories: any;
  constructor(private http: HttpClient,public router:  Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onFileSelected(event): void {
    this.selectedFile = event.target.files[0];
  }

  productCreate(): void {
    if (!this.selectedFile) {
      return;
    }

    const formData = new FormData();
    formData.append('image', this.selectedFile);
    formData.append('name_product', this.name_product);
    formData.append('description_product', this.description_product);
    formData.append('precio', this.precio);  // Formatear a dos decimales
    formData.append('id_categories', this.id_categories);

    // Configuración correcta de encabezados
    const headers = new HttpHeaders({
      'Accept': 'application/json'
    });

    this.http.post('http://127.0.0.1:8000/api/products', formData, { headers: headers })
      .subscribe(
        (response: any) => {
          console.log(response);
          this.router.navigate(['/admon/MenuList/product-list'])
        },
        (error) => {
          console.error(error);
          // Puedes manejar el error aquí
        }
      );

    // Limpiar el formulario después de cargar la imagen

  }
}
