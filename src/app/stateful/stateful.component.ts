import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ConfirmComponent } from '../confirm/confirm.component';
import { Product } from '../interface/product';
import { Shop } from '../models/shop.model';
import { HttpClient, HttpResponse } from '@angular/common/http';//para hacer peticiones
import { Subscription } from 'rxjs';//para manejar la subscripcion como si fuese un objeto


@Component({
  selector: 'app-stateful',
  templateUrl: './stateful.component.html',
  styleUrls: ['./stateful.component.css']
})
export class StatefulComponent implements OnInit, OnDestroy {

  
  @ViewChild(ConfirmComponent, {static: false }) confirmChild: ConfirmComponent = new ConfirmComponent;//Instanciar e inicializar ViewChild confirm

  errorHttp?: boolean;
  shopModel: any;
  boughtItems: Array<Product>;//Declarado
  
  private shopSubscription: Subscription | undefined;

  constructor(private http: HttpClient) { 
    this.boughtItems = [];//inicializado, durante toda la vida de ejecucion de la aplicacion
    this.shopModel = {shopItems: []};
  }

  ngOnInit(): void {
    this.shopSubscription = this.http.get('assets/cursos.json').subscribe({
      next: (respuesta: any) => { this.shopModel.shopItems = respuesta;},
      error: (respuesta: Response) => { this.errorHttp = true;}
    });


    //this.onGlobalKeyboard();
  }

  ngOnDestroy(): void {
    this.shopSubscription?.unsubscribe();
    document.removeEventListener('keypress', this.onKeyboard);
  }


  clickItem(_curso: any) {
    this.boughtItems?.push(_curso);
  }

  cursoMatriculado(_event: Product) {
    this.clickItem(_event);//el evento en el que se ha hecho click es el que recibe
    this.onConfirm();
    this.confirmChild.isDisabled = false;
  }

  finalPrice() {
    if (this.boughtItems) {
      return this.boughtItems.reduce(
        (prev: number, item: Product)=> prev + item.price, 0
      );
     }
     else 
       return undefined;
  }

  onConfirm() {
    alert('Has añadido un nuevo curso');
  }

  onKeyboard(_event: any) {
    console.log(_event);
    if (_event.key === 'Enter') {
      this.onConfirm();
    }
  }

  onGlobalKeyboard() {
    document.addEventListener('keypress', (eventoGlobal) =>{
      this.onKeyboard(eventoGlobal);
    })
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
