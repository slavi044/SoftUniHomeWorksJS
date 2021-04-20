import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommentCreateComponent } from '../comment/comment-create/comment-create.component';
import { CommentInfoComponent } from '../comment/comment-info/comment-info.component';
import { ContentComponent } from '../shared/content/content.component';
import { HeaderComponent } from '../shared/header/header.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostInfoComponent } from './post-info/post-info.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostRoutingModule } from './post-routing.module';

@NgModule({
    declarations: [
        PostCreateComponent,
        PostDetailsComponent,
        PostEditComponent,
        PostInfoComponent,
        PostListComponent,
        CommentInfoComponent,
        CommentCreateComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        PostRoutingModule
    ]
})
export class PostModule {

}