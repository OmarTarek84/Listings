import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  startDate = new Date(1990, 0, 1);
  @ViewChild('f') signupform: NgForm;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  signup() {
    this.authService.registerUser({
      email: this.signupform.value.email,
      password: this.signupform.value.password
    });
  }

}
