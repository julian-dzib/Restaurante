import { Component, OnInit } from '@angular/core';
import { CommentServiceService } from 'src/app/Services/comment-service.service';
import { Comment } from 'src/app/Shared/comment';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import Swal from 'sweetalert2';
import { ReportService } from 'src/app/Services/report.service';

@Component({
  selector: 'app-list-suggestion',
  templateUrl: './list-suggestion.component.html',
  styleUrls: ['./list-suggestion.component.scss'],
})
export class ListSuggestionComponent implements OnInit {
  //Definir un array para mostrar los productos
  list: any[];
  mes: string[];
  total: number[];
  constructor(
    private commentService: CommentServiceService,
    private router: Router,
    private authService: AuthenticationService,
    private reportService: ReportService
  ) {}

  ngOnInit(): void {
    this.authService.status().subscribe((loggedIn: boolean) => {
      if (!loggedIn) {
        this.router.navigate(['/login']);
      } else {
        this.getAllComments();
      }
    });
  }

  //Traer todos los comentarios
  getAllComments() {
    this.commentService.getAll().subscribe((res: any) => {
      //console.log(res);
      //Almacenarlos
      this.list = res.data;
      this.mes = res.mesActual;
      this.total = res.totalSuggestions;
    });
  }

  generatePDF() {
    const encabezados = ['Usuario', 'Correo', 'Teléfono', 'Sugerencia'];
    // Mapea tus datos a un formato que pueda ser usado por autoTable
    const body = this.list.map((campo) => [
      campo.name,
      campo.email,
      campo.phone,
      campo.suggestion,
    ]);
    const foot = ['Mes: ', this.mes, 'Total de Sugerencias: ', this.total];
    //const body = this.list.map(item => [item.name, item.phone, item.arrival_datetime]);
    const title = 'Sugerencias';

    // Llama al servicio para generar el informe
    this.reportService.getReport3(encabezados, body, foot, title, false);
  }

  //Metodo para eliminar registro
  deleteComment(commentId: number) {
    this.commentService.deleteComment(commentId).subscribe(
      () => {
        this.getAllComments(); // Vuelve a cargar la lista después de eliminar un comentario
      },
      (error: any) => {
        console.error('Error deleting comment', error);
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
      confirmButtonText: 'Eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteComment(id);
      }
    });
  }
}
