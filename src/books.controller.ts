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
  async getAll(): Promise<Book[]> {
    return this.bookService.getAll();
  }

  @Get(':id')
  async getOne(@Param() params): Promise<Book> {
    return this.bookService.getOne(params.id);
  }

  @Post()
  async create(@Body() Book: Book) {
    Book.id = 100;
    this.bookService.create(Book);
  }

  @Put()
  async update(@Body() Book): Promise<[number, Book[]]> {
    return this.bookService.update(Book);
  }

  @Delete(':id')
  delete(@Param() params) {
    this.bookService.delete(params.id);
  }
}
