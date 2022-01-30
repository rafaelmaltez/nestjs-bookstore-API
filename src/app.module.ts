import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';

@Module({
  imports: [],
  controllers: [AppController, BooksController],
  providers: [AppService, BooksService],
})
export class AppModule {}
