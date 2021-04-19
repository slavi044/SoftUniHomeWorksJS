import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { PostCreateComponent } from './components/post/post-create/post-create.component';
import { PostDetailsComponent } from './components/post/post-details/post-details.component';
import { PostEditComponent } from './components/post/post-edit/post-edit.component';
import { PostListComponent } from './components/post/post-list/post-list.component';
import { SinglePostResolver } from './core/resolvers/single-post.resolver';
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';
// import { PostListComponent } from './post-list/post-list.component';
// import { PostCreateComponent } from './post-create/post-create.component';
// import { PostEditComponent } from './post-edit/post-edit.component';
// import { PostDetailsComponent } from './post-details/post-details.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'posts', children: [
      { path: '', component: PostListComponent },
      { path: 'user', component: PostListComponent },
      { path: 'create', component: PostCreateComponent },
      { path: 'edit/:id', component: PostEditComponent },
      { path: 'details/:id', component: PostDetailsComponent, resolve: { post: SinglePostResolver } }
    ]
  }
  // { path: 'posts/user', component: PostListComponent },
  // { path: 'posts/create', component: PostCreateComponent },
  // { path: 'posts/edit/:id', component: PostEditComponent },
  // { path: 'posts/details/:id', component: PostDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
