import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-private',
  imports: [RouterOutlet],
  templateUrl: './private.component.html',
  styleUrl: './private.component.css'
})
export class PrivateComponent implements OnInit {
  userRole = '';

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.userRole = this.auth.getUserRole();
  }

  logout() {
    this.auth.logout();
  }
}
