import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/producto';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-explorador',
  templateUrl: './explorador.component.html',
  styleUrls: ['./explorador.component.scss']
})

export class ExploradorComponent implements OnInit {
  loadingProducts = false;

  productList: Product[] = [];

  constructor(private data: DataService){

  }

  ngOnInit():void{
    //this.productList = this.data.getProductList();
    this.getProductList();
  }

  get message():string{
    if(this.loadingProducts){
      return 'Cargando...';
    }else{
      return this.productList.length > 0 ?
      `${this.productList.length} registros encontrados.` :
      'No se han encontrado registros...';
    }
  }

  private getProductList(){
    this.loadingProducts = true;

    this.data.getProductList().subscribe(x => {
      this.loadingProducts = false;
      this.productList = x;
    })
  }
}
