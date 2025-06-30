import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieService } from 'src/app/Services/categorie.service';

@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.component.html',
  styleUrls: ['./update-categorie.component.scss']
})
export class UpdateCategorieComponent {
  updatedCategorie: any = { id: 0, name_categories: '' }; // Añade un campo 'id' para almacenar el ID del comentario

  constructor(private cateService: CategorieService, private route: ActivatedRoute, public router:  Router,    public formBuilder: FormBuilder
    ) {
    this.route.params.subscribe(params => {
    this.updatedCategorie.id = +params['id']; // Obtén el ID del comentario de la URL y almacénalo en updatedComment.id
  });
  }

  updatedCategori() {
    this.cateService.updateCategorie(this.updatedCategorie.id, this.updatedCategorie).subscribe(
      (response: any) => {
        console.log('Categorie updated:', response);
        this.router.navigate(['/admon/MenuList/categorie-list'])
      },
      (error: any) => {
        console.error('Error updating comment', error);
      }
    );
  }
}

