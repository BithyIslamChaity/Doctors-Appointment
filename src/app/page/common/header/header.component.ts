import { Component } from '@angular/core';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private auth: AuthService) { }

  logout() {
    this.auth.logout();
  }
}
