import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Product } from './product.model';

@Controller('products')
export class ProductsController {
  products: Product[] = [
    new Product('bk001', 'Clean Code', 29.99),
    new Product('bk002', 'Reactoring', 39.99),
    new Product('bk003', 'Practical AI', 19.99),
  ];

  @Get()
  getAll(): Product[] {
    return this.products;
  }

  @Get(':id')
  getOne(@Param() params): Product {
    return this.products[0];
  }

  @Post()
  create(@Body() product: Product) {
    product.id = 100;
    this.products.push(product);
  }

  @Put()
  update(@Body() product): Product {
    return product;
  }

  @Delete(':id')
  delete(@Param() params) {
    this.products.pop();
  }
}
