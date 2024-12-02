import { inject, Injectable } from '@angular/core';
import { Comment } from '../interfaces/comment.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private http = inject(HttpClient);
  private apiUrl = "http://localhost:8080/api/comments";

  private _comments: Comment[] = [];

  public get comments(): Comment[] {
    return this._comments;
  }

  public fetchCommentsByIsbn(isbn: string) {
    this.http.get<Comment[]>(`${this.apiUrl}/${isbn}`).subscribe({
      next: (response) => {
        this._comments = response;
      },
      error: (error) => {
        console.log(error);
      },
    })
  }

  public postComment(comment: Comment) {
    this.http.post<Comment>(this.apiUrl, comment).subscribe({
      next: (response) => {
        
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
