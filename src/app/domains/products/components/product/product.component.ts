import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { Product } from '@app/domains/shared/models/product.model';
import { ReversePipe } from '@app/domains/shared/pipes/reverse.pipe';
import { TimeAgoPipe } from '@app/domains/shared/pipes/time-ago.pipe';

@Component({
  selector: 'app-product',
  imports: [CommonModule, ReversePipe, TimeAgoPipe, RouterLinkWithHref],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  //@Input({required: true}) imgSrc: string = '';
  //price
  //@Input({required: true}) price: number = 0;
  //title
  //@Input({required: true}) title: string = '';

  @Input({required: true}) product: Product = {
    id: 0,
    title: '',
    price: 0,
    images: []
  };

  @Output() addToCart = new EventEmitter(); //esta es la llave para comunicar cosas del hijo al padre
  id = Math.random() * 1000;
  addToCartHandler(event: any) {
    console.log('add to cart: ', event);
    //this.addToCart.emit("HOla message desde el hijo");
    this.addToCart.emit({
      //id: this.id,
      product: this.product
      //title: this.title,
      //price: this.price,
      //image: this.imgSrc
    });

  }
}
