import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { AuthGuard } from './core/guards/auth.guards';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'posts', loadChildren: './components/post/post.module#PostModule', canLoad: [ AuthGuard ] 
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
