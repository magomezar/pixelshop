import { Component, Input, OnInit, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Product } from '../interface/product';

@Component({
  selector: 'app-status-cart',
  templateUrl: './status-cart.component.html',
  styleUrls: ['./status-cart.component.css']
})
export class StatusCartComponent implements OnInit {

  @Input() price?: number;
  @Input() shopModel?: Array<Product>;
  @Output() add: EventEmitter<null> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  /*DoCheck hace uso excesivo de la memoria, no recomendable
  ngDoCheck(): void {
    console.log('Interacción DOM');
  }*/

  /*
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  */

  confirm() {
    this.add.emit();
  }

}
