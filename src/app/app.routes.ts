import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LaunchesPageComponent } from './pages/launches-page/launches-page.component';
import { RocketsPageComponent } from './pages/rockets-page/rockets-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'lancamentos', component: LaunchesPageComponent },
  { path: 'foguetes', component: RocketsPageComponent },
  { path: '**', redirectTo: '' }
];
