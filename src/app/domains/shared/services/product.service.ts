import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient);

  constructor() { }

  getProduct(category_id?: string | null) {
    const url = new URL('https://api.escuelajs.co/api/v1/products');
    if(category_id) {
      console.log('category_id:', category_id);

      url.searchParams.set('categoryId', category_id);
    }
    //const URL = 'https://api.escuelajs.co/api/v1/products';
    return this.http.get<Product[]>(url.toString());
  }

  getOneProduct(id: string) {
    const URL = `https://api.escuelajs.co/api/v1/products/${id}`;
    return this.http.get<Product>(URL);
  }
}
