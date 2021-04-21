import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PostCreateComponent } from './post-create/post-create.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostInfoComponent } from './post-info/post-info.component';
import { PostListComponent } from './post-list/post-list.component';

import { CommentModule } from '../comments/comment.module';
import { PostRoutingModule } from './post-routing.module';

@NgModule({
  declarations: [
    PostCreateComponent,
    PostDetailsComponent,
    PostEditComponent,
    PostInfoComponent,
    PostListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CommentModule,
    PostRoutingModule
  ]
})
export class PostModule { }
