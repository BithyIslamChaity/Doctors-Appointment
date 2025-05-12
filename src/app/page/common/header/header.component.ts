import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private auth: AuthService) { }

  logout() {
    this.auth.logout();
  }
}
