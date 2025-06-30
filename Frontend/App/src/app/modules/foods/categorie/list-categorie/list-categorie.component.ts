import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieService } from 'src/app/Services/categorie.service';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list-categorie',
  templateUrl: './list-categorie.component.html',
  styleUrls: ['./list-categorie.component.scss']
})
export class ListCategorieComponent implements OnInit{
  //Definir un array para mostrar los productos
  list: any[];

  constructor(
    private cateService: CategorieService,
    private router: Router,
    private authService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.authService.status().subscribe((loggedIn: boolean) => {
      if (!loggedIn) {
        this.router.navigate(['/login'])
      } else {
   this.getAllCategorie()
      }
    });
  }
  //Traer todos los comentarios
  getAllCategorie(){
    this.cateService.getAll().subscribe((res:any)=>{
      //console.log(res);
      //Almacenarlos
      this.list = res.data;
    })
  }

  //Metodo para eliminar registro
  deleteCategorie(cateId: number) {
    this.cateService.deleteCategorie(cateId).subscribe(
      () => {
        this.getAllCategorie(); // Vuelve a cargar la lista después de eliminar un comentario
      },
      (error: any) => {
        console.error('Error deleting categorie', error);
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
      this.deleteCategorie(id);
    }
  });
}
}
