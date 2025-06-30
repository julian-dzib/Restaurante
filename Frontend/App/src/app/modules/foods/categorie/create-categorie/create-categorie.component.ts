import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategorieService } from 'src/app/Services/categorie.service';
@Component({
  selector: 'app-create-categorie',
  templateUrl: './create-categorie.component.html',
  styleUrls: ['./create-categorie.component.scss']
})
export class CreateCategorieComponent {

  categorieText: string = '';

  constructor(private cateService: CategorieService, public router:  Router) { }

  createCategorie() {
    if (this.categorieText.trim() === '') {
      return; // Evita enviar comentarios vacíos
    }

    this.cateService.createCategorie({ name_categories: this.categorieText }).subscribe(
      () => {
        this.router.navigate(['/admon/MenuList/categorie-list'])
      },
      (error: any) => {
        console.error('Error creating categorie', error);
      }
    );
  }
}

