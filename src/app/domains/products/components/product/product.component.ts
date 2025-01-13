import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required: true}) imgSrc: string = '';
  //price
  @Input({required: true}) price: number = 0;
  //title
  @Input({required: true}) title: string = '';

  @Output() addToCart = new EventEmitter(); //esta es la llave para comunicar cosas del hijo al padre
  id = Math.random() * 1000;
  addToCartHandler(event: any) {
    console.log('add to cart: ', event);
    //this.addToCart.emit("HOla message desde el hijo");
    this.addToCart.emit({
      id: this.id,
      title: this.title,
      price: this.price,
      image: this.imgSrc
    });

  }
}
