import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getAll(): string {
    return 'List all products';
  }

  @Get(':id')
  getOne(@Param() params): string {
    return `Returns product ${params.id} information`;
  }

  @Post()
  create(@Body() product): string {
    console.log(product);
    return 'Product created!';
  }

  @Put()
  update(@Body() product): string {
    console.log(product);
    return `Produc information updated`;
  }

  @Delete(':id')
  delete(@Param() params): string {
    return `Product ${params.id} deleted!`;
  }
}
