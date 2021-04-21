import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { CommentInfo } from 'src/app/components/shared/models/Comment-Info';

@Injectable()
export class CommentService {
  private readonly BASE_URL = `https://baas.kinvey.com/appdata/${environment.appKey}`;
  private readonly CREATE_COMMENT = `${this.BASE_URL}/comments`;

  constructor(
    private http: HttpClient
  ) { }

  getAllForPost(postId: string) {
    return this.http.get<CommentInfo[]>(`${this.CREATE_COMMENT}?query={"postId":"${postId}"}&sort={"_kmd.ect": -1}`)
  }

  postComment(body: Object) {
    return this.http.post(this.CREATE_COMMENT, body);
  }

  deleteComment(id: string) {
    return this.http.delete(`${this.CREATE_COMMENT}/${id}`);
  }
}