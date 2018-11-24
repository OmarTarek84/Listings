import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Output() onclose = new EventEmitter<void>();

  isAuth: false;
  constructor(private authService: AuthService) {}
  ngOnInit() {
    this.authService.authChanged.subscribe(auth => {
      this.isAuth = auth;
    });
  }

  close() {
    this.onclose.emit();
    this.isAuth = false;
  }

}
