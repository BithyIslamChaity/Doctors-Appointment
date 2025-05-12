import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-mainlayout',
  imports: [ HeaderComponent,
    SidebarComponent,
    FooterComponent,
    RouterOutlet,
    CommonModule],
  templateUrl: './mainlayout.component.html',
  styleUrl: './mainlayout.component.css'
})
export class MainlayoutComponent {

}
