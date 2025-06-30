import { Component } from '@angular/core';
import { CommentServiceService } from 'src/app/Services/comment-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-suggestion',
  templateUrl: './update-suggestion.component.html',
  styleUrls: ['./update-suggestion.component.scss']
})
export class UpdateSuggestionComponent {
 updatedComment: any = { id: 0, suggestion: '' }; // Añade un campo 'id' para almacenar el ID del comentario

  constructor(private commentService: CommentServiceService, private route: ActivatedRoute, public router:  Router,    public formBuilder: FormBuilder
    ) {
    this.route.params.subscribe(params => {
    this.updatedComment.id = +params['id']; // Obtén el ID del comentario de la URL y almacénalo en updatedComment.id
  });
  }

  updateComment() {
    this.commentService.updateComment(this.updatedComment.id, this.updatedComment).subscribe(
      (response: any) => {
        console.log('Comment updated:', response);
        this.router.navigate(['/admon/SuggestionList'])
      },
      (error: any) => {
        console.error('Error updating comment', error);
      }
    );
  }

}
