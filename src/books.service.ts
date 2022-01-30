import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Book } from './book.model';

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Book)
    private BookModel: typeof Book,
  ) {}

  async getAll(): Promise<Book[]> {
    return this.BookModel.findAll();
  }

  async getOne(id): Promise<Book> {
    return this.BookModel.findByPk(id);
  }

  async create(book: Book) {
    this.BookModel.create(book);
  }

  update(book: Book): Promise<[number, Book[]]> {
    return this.BookModel.update(book, {
      where: {
        id: book.id,
      },
    });
  }

  async delete(id) {
    const book: Book = await this.getOne(id);
    book.destroy();
  }
}
