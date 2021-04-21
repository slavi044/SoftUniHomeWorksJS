import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { PostListComponent } from './post-list/post-list.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { SinglePostResolver } from 'src/app/core/resolvers/single-post.resolver';
import { PostDetailsComponent } from './post-details/post-details.component';

const appPostRouting: Route[] = [
  { path: '', component: PostListComponent },
  { path: 'user', component: PostListComponent },
  { path: 'create', component: PostCreateComponent },
  { path: 'edit/:id', component: PostEditComponent, resolve: { post: SinglePostResolver } },
  { path: 'details/:id', component: PostDetailsComponent, resolve: { post: SinglePostResolver } }
];

@NgModule({
  imports: [
    RouterModule.forChild(appPostRouting)
  ],
  exports: [
    RouterModule
  ]
})
export class PostRoutingModule {  }