import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Book } from './book.model';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private bookService: BooksService) {}

  @Get()
  getAll(): Book[] {
    return this.bookService.getAll();
  }

  @Get(':id')
  getOne(@Param() params): Book {
    return this.bookService.getOne(params.id);
  }

  @Post()
  create(@Body() Book: Book) {
    Book.id = 100;
    this.bookService.create(Book);
  }

  @Put()
  update(@Body() Book): Book {
    return this.bookService.update(Book);
  }

  @Delete(':id')
  delete(@Param() params) {
    this.bookService.delete(params.id);
  }
}
