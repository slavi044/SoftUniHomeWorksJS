import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { PostList } from 'src/app/components/shared/models/Post-List';
import { PostEdit } from 'src/app/components/shared/models/Post-Edit';

@Injectable()
export class PostService {
  private readonly BASE_URL = `https://baas.kinvey.com/appdata/${environment.appKey}`;
  private readonly ALL_POSTS = `${this.BASE_URL}/posts?query={}&sort={"_kmd.ect": -1}`;
  private readonly CREATE_POST = `${this.BASE_URL}/posts`;

  constructor(
    private http: HttpClient
  ) {}

  getAll() {
    return this.http.get<PostList[]>(this.ALL_POSTS);
  }

  createPost(body: Object) {
    return this.http.post(this.CREATE_POST, body);
  }

  getById(id: string) {
    return this.http.get<PostEdit>(this.CREATE_POST + `/${id}`);
  }

  getDetails(id: string) {
    return this.http.get<PostList>(this.CREATE_POST + `/${id}`);
  }

  editPost(body: Object, id: string) {
    return this.http.put(this.CREATE_POST + `/${id}`, body);
  }

  deletePost(id: string) {
    return this.http.delete(this.CREATE_POST + `/${id}`);
  }

  getUserPosts() {
    return this.http.get<PostList[]>(`${this.BASE_URL}/posts?query={"author":"${localStorage.getItem('username')}"}&sort={"_kmd.ect": -1}`);
  }
}