import { Component,ElementRef, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategorieService } from 'src/app/Services/categorie.service';
@Component({
  selector: 'app-cheescakes',
  templateUrl: './cheescakes.component.html',
  styleUrls: ['./cheescakes.component.scss']
})
export class CheescakesComponent implements OnInit{
  categories: any[];
  products: any[] = [];

  constructor(private cateService: CategorieService, private http:HttpClient, private el: ElementRef) {}
  ngOnInit(): void {
    //this.getAllCategories();
    this.getProduct();
  }

  // Traer todas las categorías
  getAllCategories() {
    this.cateService.getAll().subscribe((res: any) => {
      this.categories = res.data; // Asegúrate de que tu API devuelve un objeto con la propiedad "data"
      console.log(this.categories);
    });
  }
  //getProduct(): void {
    //const apiUrl = 'http://127.0.0.1:8000/api/products';
  //}
  getImageUrl(imagePath: string): string {
    // Construye la URL completa de la imagen
    return `http://127.0.0.1:8000/${imagePath}`;
  }
  getProduct(): void {
    const apiUrl = 'http://127.0.0.1:8000/api/menus';

    this.http.get(apiUrl)
      .subscribe(
        (data: any) => {
          this.products = data.data; // Asignar el array de categorías
          console.log(this.products);
        },
        (error) => {
          console.error(error);
        }
      );}


      scrollToSection(sectionId: number): void {
        const section = this.el.nativeElement.querySelector(`#category-${sectionId}`);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
}
