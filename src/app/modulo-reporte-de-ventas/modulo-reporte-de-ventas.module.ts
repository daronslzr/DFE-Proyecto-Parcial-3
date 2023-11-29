import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataService } from '../services/data.service';

import { ExploradorComponent } from './explorador/explorador.component';
import { ResumenResultadosComponent } from './resumen-resultados/resumen-resultados.component';
import { TablaComponent } from './tabla/tabla.component';





@NgModule({
  declarations: [
    ExploradorComponent,
    ResumenResultadosComponent,
    TablaComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[
    DataService
  ],
  exports:[
    ExploradorComponent
  ]
})
export class ModuloReporteDeVentasModule { }
