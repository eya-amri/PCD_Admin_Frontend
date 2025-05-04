import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router'; // <-- Import nécessaire
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-user-layout',
  standalone: true, // <-- Activer le mode standalone
  imports: [RouterModule, RouterOutlet, RouterLink], // <-- Ajouter RouterModule ici (important )
  templateUrl: './user-layout.component.html',
  styleUrl: './user-layout.component.css'
})



export class UserLayoutComponent {
  showNavbar: boolean = true;


}
