import { Component, ViewEncapsulation  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../services/auth-admin.service';
import { FormsModule } from '@angular/forms';  // Importation de FormsModule
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-auth-admin',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, HttpClientModule],  
  templateUrl: './auth-admin.component.html',
  styleUrl: './auth-admin.component.css',
  template: `<router-outlet></router-outlet>`,
  encapsulation: ViewEncapsulation.None // Désactive l'encapsulation
})
export class AuthAdminComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router, private http: HttpClient) {}

  onLogin() {
    console.log('Username:', this.username, 'Password:', this.password); 
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        console.log('Réponse backend:', response);
        if (response?.status === 'success') {
          alert('Félicitations. Authentification réussie.');
          // Si la connexion est réussie, rediriger vers le dashboard
          this.router.navigate(['admin/dashbord']);
        } else {
          // Si la connexion échoue, afficher un message d'erreur
          alert(response.message);
        }
      },
      (error) => {
        console.error('Error during login:', error);
        alert('Erreur lors de la connexion. Veuillez réessayer.');
      }
    );
  }

}
