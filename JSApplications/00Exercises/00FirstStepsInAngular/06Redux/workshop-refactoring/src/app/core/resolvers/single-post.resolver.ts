import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PostEdit } from '../../components/shared/models/Post-Edit';
import { PostService } from '../services/post.service';

@Injectable()
export class SinglePostResolver implements Resolve<PostEdit> {

  constructor(
    private postService: PostService
  )  { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.params['id'];
    if (route.url[0].path === 'edit') {
      return this.postService.getById(id);
    } else {
      return this.postService.getDetails(id);
    }
  }
}