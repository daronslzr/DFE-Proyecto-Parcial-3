import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/producto';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-explorador',
  templateUrl: './explorador.component.html',
  styleUrls: ['./explorador.component.scss']
})

export class ExploradorComponent implements OnInit {
  productList: Product[] = [];

  constructor(private data: DataService){

  }

  ngOnInit():void{
    this.productList = this.data.getProductList();
  }

  get message():string{
    return this.productList.length > 0 ?
    `${this.productList.length} registros encontrados.` :
    'No se han encontrado registros...';
  }
}
