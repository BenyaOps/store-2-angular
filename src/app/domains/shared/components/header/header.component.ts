import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLinkWithHref],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideSideMenu = signal(false);
  // @Input({required: true}) cart: Product[] = []; // este cart ya esta delegado al servicio
  // total = signal(0); //este total ya esta delegado al servicio
  private cartService = inject(CartService);
  cart = this.cartService.cart;
  total = this.cartService.total;

  toggleSideMenu() {
    this.hideSideMenu.update((prevState) => !prevState);
  }
/*
//Este metodo ya no es necesario, poruqe el total ya esta delegado al servicio
  ngOnChanges(changes: SimpleChanges) {
    console.log('Cart changed');
    const cart = changes['cart'];
    if(cart) {
      console.log('Cart:', cart.currentValue);
      this.total.set(this.calcTotal());
    }
  }


  calcTotal() {
    return this.cart.reduce((total, product) => total + product.price, 0);
  }
*/
}
