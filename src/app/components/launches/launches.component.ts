import { Component, OnInit } from '@angular/core';
import { SpaceXService } from '../../services/spacex.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class LaunchesComponent implements OnInit {
  launches: any[] = [];
  filteredLaunches: any[] = [];
  loading = true;
  searchTerm = '';
  statusFilter = '';

  constructor(private spaceXService: SpaceXService) { }

  ngOnInit(): void {
    this.loadLaunches();
  }

  loadLaunches(): void {
    this.spaceXService.getLaunches().subscribe({
      next: (data) => {
        this.launches = data;
        this.filteredLaunches = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Erro ao carregar lançamentos:', error);
        this.loading = false;
      }
    });
  }

  filterLaunches(): void {
    this.filteredLaunches = this.launches.filter(launch => {
      const matchesSearch = launch.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                          launch.details?.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      let matchesStatus = true;
      if (this.statusFilter) {
        switch (this.statusFilter) {
          case 'success':
            matchesStatus = launch.success === true;
            break;
          case 'failure':
            matchesStatus = launch.success === false;
            break;
          case 'upcoming':
            matchesStatus = new Date(launch.date_utc) > new Date();
            break;
        }
      }
      
      return matchesSearch && matchesStatus;
    });
  }
} 