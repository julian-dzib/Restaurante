import { Component, OnInit, NgZone } from '@angular/core';
import {Router} from '@angular/router';
//Importar el servicio
//Importar el form
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { CommentServiceService } from 'src/app/Services/comment-service.service';
@Component({
  selector: 'app-create-suggestion',
  templateUrl: './create-suggestion.component.html',
  styleUrls: ['./create-suggestion.component.scss']
})
export class CreateSuggestionComponent{
  suggesForm: FormGroup;

  newSugges: any = {
    name: '',
    email: '',
    phone: '',
    suggestion: '',
  };


  constructor(
    private commentService: CommentServiceService,
    private formBuilder: FormBuilder,
  ) {
        // Inicializar el formulario con validadores si es necesario
        this.suggesForm = this.formBuilder.group({
          name: ['', Validators.required],
          email: ['', Validators.required],
          phone: ['', Validators.required],
          suggestion: ['', Validators.required]
        });


  }

  createNewSuggestion() {
    //if (this.newSugges.trim() === '') {
      //return; // Evita enviar comentarios vacíos
    //}
    if (this.suggesForm.valid) {
      const formData = this.suggesForm.value;
      this.commentService.createComment(formData).subscribe(
        (response) => {

          this.suggesForm.reset();
        },
        (error) => {
          console.error('Error al crear la reservación:', error);
        }
      );
    }



        // Reinicia el textarea después de enviar el comentario
      //  this.newSugges = '';
      //},
      //(error: any) => {
        //console.error('Error creating comment', error);
      //}
    //);
  }




  /*
  commentForm : FormGroup;

  constructor(
    public formBiulder:FormBuilder,
    private router:Router,
    private ngZone:NgZone,
    private commentService: CommentService
  ){
    this.commentForm = this.formBiulder.group({
      comment: ['']
    })
  }


*/
 /* onSumit():any{
    this.commentService.addComment(this.commentForm.value)
    .subscribe(()=>{
      console.log('Data added succesfull')
      this.ngZone.run(()=>this.router.navigateByUrl('/comment-list'))
    }, (err)=>{
        console.log(err)
    })
  }*/
}
