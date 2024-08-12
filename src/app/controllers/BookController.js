import BookService from "../services/book/BookService.js";
import HttpStatus from '../helpers/enums/HttpStatus.js';
import { BookMessages } from '../helpers/enums/ResponseMessages.js';

class BookController {
  static async listBooks(req, res) {
    try {
      const bookList = await BookService.listBooks();
      res.status(HttpStatus.OK).json(bookList);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: BookMessages.REQUEST_FAILED });
    }
  };

  static async getBookById(req, res) {
    try {
      const id = req.params.id;
      const foundBook = await BookService.getBookById(id);
      res.status(HttpStatus.OK).json(foundBook);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: BookMessages.RETRIEVE_FAILED });
    }
  };

  static async createBook(req, res) {
    const newBook = req.body;
    try {
      const createdBook = await BookService.createBook(newBook);
      res.status(HttpStatus.CREATED).json({ message: BookMessages.SUCCESSFULLY_CREATED, book: createdBook });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: BookMessages.CREATE_FAILED });
    }
  }

  static async updateBook(req, res) {
    try {
      const id = req.params.id;
      await BookService.updateBook(id, req.body);
      res.status(HttpStatus.OK).json({ message: BookMessages.BOOK_UPDATED });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: BookMessages.UPDATE_FAILED });
    }
  }

  static async deleteBook(req, res) {
    try {
      const id = req.params.id;
      await BookService.deleteBook(id);
      res.status(HttpStatus.OK).json({ message: BookMessages.BOOK_DELETED });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: BookMessages.DELETE_FAILED });
    }
  }

  static async getBooksByAuthor(req, res) {
    const authorId = req.params.author;
    try {
      const BooksByAuthor = await BookService.getBooksByAuthor(authorId);
      res.status(HttpStatus.OK).json(BooksByAuthor);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: BookMessages.SEARCH_FAILED });
    }
  }
}

export default BookController;