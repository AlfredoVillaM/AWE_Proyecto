import { inject, Injectable } from '@angular/core';
import { Comment } from '../interfaces/comment.interface';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private http = inject(HttpClient);
  private apiUrl = "http://localhost:8080/api/comments";

  private _comments: Comment[] = [];

  private commentsSubject = new BehaviorSubject<Comment[]>([]);
  public comments$ = this.commentsSubject.asObservable();

  public fetchCommentsByIsbn(isbn: string) {
    this.http.get<Comment[]>(`${this.apiUrl}/${isbn}`).subscribe({
      next: (response) => {
        this.commentsSubject.next(response.reverse());
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  public postComment(comment: Comment) {
    this.http.post<Comment>(this.apiUrl, comment).subscribe({
      next: (response) => {
        const currentComments = this.commentsSubject.value;
        this.commentsSubject.next([response, ...currentComments]);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  // public fetchCommentsByIsbn(isbn: string) {
  //   this.http.get<Comment[]>(`${this.apiUrl}/${isbn}`).subscribe({
  //     next: (response) => {
  //       this._comments = response;
  //       console.log(this._comments);
  //     },
  //     error: (error) => {
  //       console.log(error);
  //     },
  //   })
  // }

  // public postComment(comment: Comment) {
  //   this.http.post<Comment>(this.apiUrl, comment).subscribe({
  //     next: (response) => {
  //       this._comments.unshift(comment);
  //     },
  //     error: (error) => {
  //       console.log(error);
  //     },
  //   });
  // }

  // public get comments(): Comment[] {
  //   return this._comments;
  // }
}
