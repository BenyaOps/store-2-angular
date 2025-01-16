import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter-product',
  imports: [],
  templateUrl: './counter-product.component.html',
  styleUrl: './counter-product.component.css'
})
export class CounterProductComponent {
  counter = signal(0);

  constructor() {
    console.log('CounterProductComponent');
    console.log('-'.repeat(10));
  }

}
