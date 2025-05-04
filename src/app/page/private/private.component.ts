import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-private',
  imports: [RouterOutlet],
  templateUrl: './private.component.html',
  styleUrl: './private.component.css'
})
export class PrivateComponent {
  constructor(private auth: AuthService) { }

  logout() {
    this.auth.logout();
  }
}
