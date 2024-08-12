import BookRepository from "../../repositories/BookRepository.js";
import { Author } from "../../models/Author.js";
import { BookMessages } from '../../helpers/enums/ResponseMessages.js';

class BookService {
  static async listBooks() {
    try {
      return await BookRepository.findAll();
    } catch (error) {
      throw new Error(BookMessages.RETRIEVE_FAILED);
    }
  }

  static async getBookById(id) {
    try {
      return await BookRepository.findById(id);
    } catch (error) {
      throw new Error(BookMessages.RETRIEVE_FAILED);
    }
  }

  static async createBook(bookData) {
    try {
      const foundAuthor = await Author.findById(bookData.author);
      const completeBook = { ...bookData, author: { ...foundAuthor._doc } };
      return await BookRepository.create(completeBook);
    } catch (error) {
      throw new Error(BookMessages.CREATE_FAILED);
    }
  }

  static async updateBook(id, newData) {
    try {
      return await BookRepository.update(id, newData);
    } catch (error) {
      throw new Error(BookMessages.UPDATE_FAILED);
    }
  }

  static async deleteBook(id) {
    try {
      await BookRepository.delete(id);
      return;
    } catch (error) {
      throw new Error(BookMessages.DELETE_FAILED);
    }
  }

  static async getBooksByAuthor(authorId) {
    try {
      return await BookRepository.findByAuthor(authorId);
    } catch (error) {
      throw new Error(BookMessages.RETRIEVE_FAILED);
    }
  }
}

export default BookService;