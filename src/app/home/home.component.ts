import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { UIService } from '../shared/ui.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('f') signinForm: NgForm;
  isAuth: false;
  errorLogIn = false;
  constructor(private authService: AuthService, private uiService: UIService) { }

  ngOnInit() {
    this.uiService.loadError.subscribe(
      (result => {
        if (result) {
          this.errorLogIn = true;
        }
      })
    );
  }

  login() {
    this.authService.logInUser({
      email: this.signinForm.value.email,
      password: this.signinForm.value.password
    });
  }

}
