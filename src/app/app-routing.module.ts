import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './modulo-dashboard/home/home.component';
import { ExploradorComponent } from './modulo-reporte-de-ventas/explorador/explorador.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'reporteVentas', component: ExploradorComponent},
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path: '**', component: HomeComponent} //componente not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
