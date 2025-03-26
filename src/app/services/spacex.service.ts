import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Launch {
  id: string;
  name: string;
  date_utc: string;
  success: boolean;
  details: string;
  links: {
    patch: {
      small: string;
    };
    webcast: string;
    article: string;
    wikipedia: string;
  };
  rocket: string;
  launchpad: string;
  crew: string[];
  ships: string[];
  capsules: string[];
  payloads: string[];
}

export interface Rocket {
  id: string;
  name: string;
  type: string;
  active: boolean;
  stages: number;
  boosters: number;
  cost_per_launch: number;
  success_rate_pct: number;
  first_flight: string;
  country: string;
  company: string;
  wikipedia: string;
  description: string;
  flickr_images: string[];
}

@Injectable({
  providedIn: 'root'
})
export class SpaceXService {
  private baseUrl = 'https://api.spacexdata.com/v4';

  constructor(private http: HttpClient) { }

  getLaunches(page: number = 1, limit: number = 25): Observable<{ launches: Launch[], total: number }> {
    return this.http.get<Launch[]>(`${this.baseUrl}/launches`).pipe(
      map(launches => {
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const paginatedLaunches = launches.slice(startIndex, endIndex);
        return {
          launches: paginatedLaunches,
          total: launches.length
        };
      })
    );
  }

  getRockets(): Observable<Rocket[]> {
    return this.http.get<Rocket[]>(`${this.baseUrl}/rockets`);
  }

  getCrew(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/crew`);
  }

  getLaunchById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/launches/${id}`);
  }
} 