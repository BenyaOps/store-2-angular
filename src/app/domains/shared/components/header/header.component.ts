import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges, signal } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideSideMenu = signal(false);
  @Input({required: true}) cart: Product[] = [];
  total = signal(0);
  toggleSideMenu() {
    this.hideSideMenu.update((prevState) => !prevState);
  }

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

}
