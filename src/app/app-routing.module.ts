import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaunchesComponent } from './components/launches/launches.component';

const routes: Routes = [
  { path: '', redirectTo: '/lancamentos', pathMatch: 'full' },
  { path: 'lancamentos', component: LaunchesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 