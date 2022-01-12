import { Injectable } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductService {
  products: Product[] = [
    new Product('bk001', 'Clean Code', 29.99),
    new Product('bk002', 'Reactoring', 39.99),
    new Product('bk003', 'Practical AI', 19.99),
  ];

  getAll(): Product[] {
    return this.products;
  }

  getOne(id): Product {
    return this.products[0];
  }

  create(product: Product) {
    this.products.push(product)
  }

  update(product: Product): Product {
    return product;
  }

  delete(id) {
    this.products.pop();
  }
}
