import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Login } from 'src/app/+store/auth/actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('f') loginForm: NgForm;

  constructor(private store: Store<any>) { }

  login() {
    const { username, password } = this.loginForm.value;
    this.store.dispatch(new Login({ username, password }));
  }
}
