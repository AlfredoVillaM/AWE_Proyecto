import { Component, inject, Input } from '@angular/core';
import { CommentDataComponent } from '../comment-data/comment-data.component';
import { NgFor } from '@angular/common';
import { CommentsService } from '../../services/comments.service';
import { Comment } from '../../interfaces/comment.interface';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [NgFor, CommentDataComponent],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent {
  private commentsService = inject(CommentsService);

  @Input()
  public isbn: string = "";

  public comments: Comment[] = [];

  constructor() {
    this.commentsService.fetchCommentsByIsbn(this.isbn);
    this.comments = this.commentsService.comments;
    console.log(this.comments);
  }

  // public get comments(): Comment[] {
  //   return this.commentsService.comments;
  // }
}
