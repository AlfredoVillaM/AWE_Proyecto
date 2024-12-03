import { Component, inject, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Comment } from '../../interfaces/comment.interface';
import { CommentsService } from '../../services/comments.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-comment-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './comment-form.component.html',
  styleUrl: './comment-form.component.css'
})
export class CommentFormComponent {
  private commentService = inject(CommentsService);
  private authService = inject(AuthService);

  @Input()
  public isbn: string = "";
  
  public onFormSubmit(form: NgForm): void {
    if (form.valid) {
      const newComment: Comment = {
        isbn: this.isbn,
        username: this.authService.userActive,
        content: form.value.content
      }
  
      this.commentService.postComment(newComment);
      form.resetForm();
    }
  }
}
