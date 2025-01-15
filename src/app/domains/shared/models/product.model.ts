import { CategoryProduct } from "./category-product.model";

export interface Product {
  id: number;
  title: string;
  description?: string;
  price: number;
  images: string[];
  creationAt?: Date | string;
  category?: CategoryProduct;
}
