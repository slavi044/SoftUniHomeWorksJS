import { NgModule } from '@angular/core';
import { SinglePostResolver } from './resolvers/single-post.resolver';
import { AuthService } from './services/auth.service';
import { CommentService } from './services/comment.service';
import { PostService } from './services/post.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';

@NgModule({
  providers: [
    SinglePostResolver,
    AuthService,
    CommentService,
    PostService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }