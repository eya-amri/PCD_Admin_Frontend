import { Component, AfterViewInit, AfterViewChecked, Inject, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import Chart from 'chart.js/auto';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements AfterViewInit, AfterViewChecked {
  private chartInstance: Chart | null = null; // Variable pour stocker l'instance du graphique

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeChart(); // Initialisation du graphique une seule fois
    }
  }

  ngAfterViewChecked(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Ne redessine le graphique que s'il n'est pas déjà initialisé
      if (!this.chartInstance) {
        this.initializeChart();
      }
    }
  }

  private initializeChart(): void {
    const canvas = document.getElementById('statisticsChart') as HTMLCanvasElement;
    if (canvas && !this.chartInstance) { // S'assurer que le graphique n'est pas déjà initialisé
      const ctx = canvas.getContext('2d');
      if (ctx) {
        this.chartInstance = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Mar', 'Apr', 'May'],
            datasets: [{
              label: 'Users',
              data: [0, 20, 40],
              borderColor: 'blue',
              borderWidth: 3,
              fill: false,
              tension: 0.4
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: true,
                position: 'top',
                labels: {
                  boxWidth: 20,
                  padding: 15
                }
              }
            },
            scales: {
              y: {
                beginAtZero: true
              },
              x: {
                grid: {
                  display: false
                }
              }
            }
          }
        });
      }
    }
  }
}
