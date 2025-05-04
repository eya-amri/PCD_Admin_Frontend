import { Component, Renderer2, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatListModule } from '@angular/material/list'; 
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatIconModule } from '@angular/material/icon'; 

@Component({
  selector: 'app-setprofil',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule ,
    MatToolbarModule,
    MatIconModule
  ],
  templateUrl: './setprofil.component.html',
  styleUrls: ['./setprofil.component.css']
})
export class SetprofilComponent {
  user = {
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+123456789'
  };

  feedback = {
    text: ''
  };

  isDarkTheme = true; // Valeur par défaut
  isSidenavOpen: boolean | undefined;

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {
    // Appliquer le thème sombre par défaut
    this.renderer.addClass(this.document.body, 'dark-theme');
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;

    if (this.isDarkTheme) {
      this.renderer.removeClass(this.document.body, 'light-theme');
      this.renderer.addClass(this.document.body, 'dark-theme');
    } else {
      this.renderer.removeClass(this.document.body, 'dark-theme');
      this.renderer.addClass(this.document.body, 'light-theme');
    }

    // Animation du bouton
    const icon = this.document.querySelector('.theme-toggle-icon');
    if (icon) {
      icon.classList.add('toggle-animation');
      setTimeout(() => icon.classList.remove('toggle-animation'), 600);
    }
  }

  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
    console.log("Toggling sidenav... Open status:", this.isSidenavOpen);
  }

  updateProfile() {
    console.log('Profile updated:', this.user);
  }

  sendFeedback() {
    console.log('Feedback sent:', this.feedback.text);
  }
}
