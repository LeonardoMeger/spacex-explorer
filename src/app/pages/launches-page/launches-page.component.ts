import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaceXService, Launch } from '../../services/spacex.service';

@Component({
  selector: 'app-launches-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './launches-page.component.html',
  styleUrls: ['./launches-page.component.scss']
})
export class LaunchesPageComponent implements OnInit {
  launches: Launch[] = [];
  currentPage = 1;
  totalLaunches = 0;
  launchesPerPage = 25;
  loading = false;

  constructor(private spaceXService: SpaceXService) {}

  ngOnInit(): void {
    this.loadLaunches();
  }

  loadLaunches(): void {
    this.loading = true;
    this.spaceXService.getLaunches(this.currentPage, this.launchesPerPage).subscribe({
      next: (response) => {
        this.launches = response.launches;
        this.totalLaunches = response.total;
        this.loading = false;
      },
      error: (error) => {
        console.error('Erro ao carregar lançamentos:', error);
        this.loading = false;
      }
    });
  }

  nextPage(): void {
    if (this.currentPage * this.launchesPerPage < this.totalLaunches) {
      this.currentPage++;
      this.loadLaunches();
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadLaunches();
    }
  }

  get totalPages(): number {
    return Math.ceil(this.totalLaunches / this.launchesPerPage);
  }
} 