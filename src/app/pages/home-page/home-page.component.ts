import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="hero">
      <h1>Bem-vindo à SpaceX</h1>
      <p>Explore o universo através dos dados da SpaceX</p>
    </div>

    <div class="resources">
      <a routerLink="/lancamentos" class="resource-card">
        <h2>Lançamentos</h2>
        <p>Veja todos os lançamentos da SpaceX</p>
      </a>

      <a routerLink="/foguetes" class="resource-card">
        <h2>Foguetes</h2>
        <p>Conheça a frota de foguetes da SpaceX</p>
      </a>
    </div>
  `,
  styles: [`
    .hero {
      text-align: center;
      padding: 4rem 2rem;
      background: linear-gradient(135deg, #1a1a1a 0%, #333 100%);
      color: white;
      margin-bottom: 2rem;
    }

    h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    .hero p {
      font-size: 1.2rem;
      opacity: 0.9;
    }

    .resources {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .resource-card {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      text-decoration: none;
      color: inherit;
      transition: transform 0.3s ease, box-shadow 0.3s ease;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      }

      h2 {
        color: #1a1a1a;
        margin-bottom: 1rem;
      }

      p {
        color: #666;
        margin: 0;
      }
    }

    @media (max-width: 768px) {
      .hero {
        padding: 3rem 1rem;
      }

      h1 {
        font-size: 2rem;
      }

      .resources {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class HomePageComponent {} 