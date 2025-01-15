import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient);

  constructor() { }

  getProduct() {
    const URL = 'https://api.escuelajs.co/api/v1/products';
    return this.http.get<Product[]>(URL);
  }

  getOneProduct(id: string) {
    const URL = `https://api.escuelajs.co/api/v1/products/${id}`;
    return this.http.get<Product>(URL);
  }
}
