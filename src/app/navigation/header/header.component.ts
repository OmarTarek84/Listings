import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() thetoggle = new EventEmitter<void>();
  isAuth: false;
  constructor(private authService: AuthService) {}
  ngOnInit() {
    this.authService.authChanged.subscribe(auth => {
      this.isAuth = auth;
    });
  }

  toggle() {
    this.thetoggle.emit();
  }

}
