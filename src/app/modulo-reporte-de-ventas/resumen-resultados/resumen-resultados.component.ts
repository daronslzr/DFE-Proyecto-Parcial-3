import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resumen-resultados',
  templateUrl: './resumen-resultados.component.html',
  styleUrls: ['./resumen-resultados.component.scss']
})

export class ResumenResultadosComponent {
  @Input() message: string = '';

}
