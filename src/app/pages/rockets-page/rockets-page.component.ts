import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SpaceXService, Rocket } from '../../services/spacex.service';

@Component({
  selector: 'app-rockets-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './rockets-page.component.html',
  styleUrls: ['./rockets-page.component.scss']
})
export class RocketsPageComponent implements OnInit {
  rockets: Rocket[] = [];

  constructor(private spaceXService: SpaceXService) {}

  ngOnInit(): void {
    this.spaceXService.getRockets().subscribe({
      next: (rockets) => {
        this.rockets = rockets;
      },
      error: (error) => {
        console.error('Erro ao carregar foguetes:', error);
      }
    });
  }

  formatCost(cost: number): string {
    return cost.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'USD'
    });
  }
} 