import { Injectable } from '@nestjs/common';
import { Book } from './book.model';

@Injectable()
export class BooksService {
  private readonly books: Book[] = [
    // new Book('bk001', 'Clean Code', 29.99),
    // new Book('bk002', 'Reactoring', 39.99),
    // new Book('bk003', 'Practical AI', 19.99),
  ];

  getAll(): Book[] {
    return this.books;
  }

  getOne(id): Book {
    return this.books[0];
  }

  create(book: Book) {
    this.books.push(book);
  }

  update(book: Book): Book {
    return book;
  }

  delete(id) {
    this.books.pop();
  }
}
