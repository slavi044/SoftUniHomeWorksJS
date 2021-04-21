import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') registerForm: NgForm;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  register() {
    // this.authService
    //   .signUp(this.registerForm.value)
    //   .subscribe((data) => {
    //     console.log(data);
    //     this.router.navigate([ '/login' ]);
    //   })
  }
}
