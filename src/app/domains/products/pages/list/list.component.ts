import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from './../../components/product/product.component';
import { NavbarComponent } from '@app/domains/shared/components/navbar/navbar.component';
import { Product } from '@app/domains/shared/models/product.model';
import { HeaderComponent } from '@app/domains/shared/components/header/header.component';
import { CartService } from '@app/domains/shared/services/cart.service';
import { ProductService } from '@app/domains/shared/services/product.service';
import { CategoriesService } from '@app/domains/shared/services/categories.service';
import { Category } from '@app/domains/shared/models/category.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);
  productsCart = signal<Product[]>([]);

  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoriesService = inject(CategoriesService);

  ngOnInit() {
    this.getProducts();
    this.getCategories();
  }

  cart = this.cartService.cart;
  constructor() {

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

  private getProducts() {
    this.productService.getProduct().subscribe({
      next: (products) => {
        console.log('Products fetched: ', products);
        this.products.set(products);
      },
      error: (error) => {
        console.error('Error fetching products: ', error);
      }
    });
  }

  private getCategories() {
    this.categoriesService.getAll().subscribe({
      next: (categories) => {
        console.log('Categories fetched: ', categories);
        this.categories.set(categories);
      },
      error: (error) => {
        console.error('Error fetching categories: ', error);
      }
    });
  }

}
