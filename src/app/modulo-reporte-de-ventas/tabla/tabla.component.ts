import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/producto';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent {
 @Input() productList: Product[] = [];

 imagePath = '../../../assets/img/videojuegos/';
}
