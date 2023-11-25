import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploradorComponent } from './explorador/explorador.component';
import { TablaComponent } from './tabla/tabla.component';
import { ResumenResultadosComponent } from './resumen-resultados/resumen-resultados.component';



@NgModule({
  declarations: [
    ExploradorComponent,
    TablaComponent,
    ResumenResultadosComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ExploradorComponent
  ]
})
export class ModuloReporteDeVentasModule { }
