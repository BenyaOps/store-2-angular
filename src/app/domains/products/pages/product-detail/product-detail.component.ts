import { CommonModule } from '@angular/common';
import { Component, Input, inject, signal } from '@angular/core';
import { Product } from '@app/domains/shared/models/product.model';
import { CartService } from '@app/domains/shared/services/cart.service';
import { ProductService } from '@app/domains/shared/services/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export default class ProductDetailComponent {

  // una vez colocado withComponentInputBinding() en el app config, el id llega como un input
  @Input() id?: string;
  product = signal<Product | null>(null);
  cover = signal('');
  private productService = inject(ProductService);

  private cartService = inject(CartService);
  //get id of dynamic routes

  ngOnInit() {
    console.log('ProductDetailComponent initialized');
    if(this.id) {
      this.productService.getOneProduct(this.id)
      .subscribe({
        next: (product) => {
          console.log('Product:', product);
          this.product.set(product);
          if(product.images.length > 0) {
            this.cover.set(product.images[0]);
          }
        },
        error: (error) => {
          console.log('Error:', error);
        }
      });
    }
  }

  changeCover(image: string) {
    this.cover.set(image);
  }

  addToCart() {
    const product = this.product(); // es necesario crear una variable para obtener el valor del signal
    // o tambien podemos decir, para suscribirse
    if (product) {
      this.cartService.addToCart(product);
      return;
    }
  }
}
