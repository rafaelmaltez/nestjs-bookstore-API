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
import { ProductService } from './product.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductService) {}

  @Get()
  getAll(): Product[] {
    return this.productService.getAll();
  }

  @Get(':id')
  getOne(@Param() params): Product {
    return this.productService.getOne(params.id);
  }

  @Post()
  create(@Body() product: Product) {
    product.id = 100;
    this.productService.create(product);
  }

  @Put()
  update(@Body() product): Product {
    return this.productService.update(product);
  }

  @Delete(':id')
  delete(@Param() params) {
    this.productService.delete(params.id);
  }
}
