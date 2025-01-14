import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from './../../components/product/product.component';
import { NavbarComponent } from '@app/domains/shared/components/navbar/navbar.component';
import { Product } from '@app/domains/shared/models/product.model';
import { HeaderComponent } from '@app/domains/shared/components/header/header.component';
import { CartService } from '@app/domains/shared/services/cart.service';
import { ProductService } from '@app/domains/shared/services/product.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, NavbarComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);
  productsCart = signal<Product[]>([]);

  private cartService = inject(CartService);
  private productService = inject(ProductService);

  ngOnInit() {
    this.productService.getProduct().subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: (error) => {
        console.error('Error fetching products: ', error);
      }
    })
    ;
  }

  cart = this.cartService.cart;
  constructor() {
    const initProducts: Product[] = [
      {
        id: 1,
        title: 'Product 1',
        description: 'Description product 1',
        price: 100,
        images: ['https://picsum.photos/300/250?random=1']
      },
      {
        id: 2,
        title: 'Product 2',
        price: 200,
        images: ['https://picsum.photos/300/250?random=1']
      },
      {
        id: 3,
        title: 'Product 3',
        price: 300,
        images: ['https://picsum.photos/300/250?random=1']
      },
      {
        id: 4,
        title: 'Product 4',
        price: 400,
        images: ['https://picsum.photos/300/250?random=1']
      },
      {
        id: 5,
        title: 'Product 5',
        price: 500,
        images: ['https://picsum.photos/300/250?random=1']
      }
    ];
    this.products.set(initProducts);
  }
  // el metodo output de product, lo recibo aqui
  // 'event' is the object that is emitted from the child component
  fromProduct(event: any) {
    console.log('event from product: ', event);
    //this.productsCart.update((prevState) => [...prevState, event]);
    this.cartService.addToCart(event);
  }

  productsInCart: Product[] = [];
  addToCart(product: Product) {
    this.productsInCart.push(product);
  }
}
