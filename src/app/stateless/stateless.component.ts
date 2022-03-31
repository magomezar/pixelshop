import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//Añadimos la importacion del input para que se comunique el componente padre e hijo
//Añadimos un output para devolver los datos con un evento -EventEmitter
import { Product } from '../interface/product';//importamos product, interface

@Component({
  selector: 'app-stateless',
  templateUrl: './stateless.component.html',
  styleUrls: ['./stateless.component.css']
})
export class StatelessComponent implements OnInit {

  @Output () cursomatriculado: EventEmitter<Product> = new EventEmitter();

  @Input () product? : Product;
  //llamamos al input, lo llamamos como queramos y renombramos en la vista stateless y es tipo Product(la interface)
  //Recibimos un producto mediante la implementacion de la interface (arriba)
  public matricula?: string;
  private disable?: boolean;//para desactivar el boton, es solo para este componente, por eso privado

  constructor() { }

  ngOnInit(): void {
    this.matricula = 'Matricularse';
  }

  matricularse() {
    this.disable = true;//desactiva boton
    this.matricula = '¡Matriculado!';//cambia el texto
    this.cursomatriculado.emit(this.product);//emite ese evento
  }

  isDisabled() {
    return !!this.disable;
  }

}
