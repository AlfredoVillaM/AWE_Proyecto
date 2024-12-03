import { Component, Input } from '@angular/core';
import { Comment } from '../../interfaces/comment.interface';

@Component({
  selector: 'app-comment-data',
  standalone: true,
  imports: [],
  templateUrl: './comment-data.component.html',
  styleUrl: './comment-data.component.css'
})
export class CommentDataComponent {
  @Input()
  public comment: Comment = {
    isbn: "",
    username: "",
    content: ""
  }
}
