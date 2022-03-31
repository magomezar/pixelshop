import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Product } from '../interface/product';
import { Shop } from '../models/shop.model';


@Component({
  selector: 'app-stateful',
  templateUrl: './stateful.component.html',
  styleUrls: ['./stateful.component.css']
})
export class StatefulComponent implements OnInit {


  shopModel: any = new Shop();
  boughtItems?: Array<Product>;//Declarado

  constructor() { 
    this.boughtItems = [];//inicializado, durante toda la vida de ejecucion de la aplicacion
  }

  ngOnInit(): void {
  }


  clickItem(_curso: any) {
    this.boughtItems?.push(_curso);
  }

  cursoMatriculado(_event: Product) {
    this.clickItem(_event);//el evento en el que se ha hecho click es el que recibe
    
  }

  finalPrice() {
    if (this.boughtItems) {
      return this.boughtItems.reduce(
        (prev: number, item: Product)=> prev + item.price, 0
      );
     }
     else 
       return null;
  }
  
  //finalPrice() {
  //  if (this.boughtItems) {
  //    return this.boughtItems.reduce(
  //      (previousValue: number, currentValue: Product/*item con el que trabajamos*/) => previousValue + currentValue.price,
  //      0
  //    );
  //  }
  //}
  //(valorprevio: tipo, item con el que trabajamos con tipo-son los parametros)
  //=>valorprevio + valoractual.price, 0(seria el inicializador o valor inicial, aqui 0

}
