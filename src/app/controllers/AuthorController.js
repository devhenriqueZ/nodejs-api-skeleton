import AuthorService from '../services/author/AuthorService.js';
import HttpStatus from '../helpers/enums/HttpStatus.js';
import { AuthorMessages } from '../helpers/enums/ResponseMessages.js';

class AuthorController {
  static async listAuthors(req, res) {
    try {
      const authorList = await AuthorService.getAllAuthors();
      res.status(HttpStatus.OK).json(authorList);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: AuthorMessages.REQUEST_FAILED });
    }
  };

  static async getAuthorById(req, res) {
    try {
      const id = req.params.id;
      const foundAuthor = await AuthorService.getAuthorById(id);
      res.status(HttpStatus.OK).json(foundAuthor);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: AuthorMessages.RETRIEVE_FAILED });
    }
  };

  static async createAuthor(req, res) {
    try {
      const newAuthor = await AuthorService.createNewAuthor(req.body);
      res.status(HttpStatus.CREATED).json({ message: AuthorMessages.SUCCESSFULLY_CREATED, author: newAuthor });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: AuthorMessages.CREATE_FAILED });
    }
  }

  static async updateAuthor(req, res) {
    try {
      const id = req.params.id;
      await AuthorService.updateExistingAuthor(id, req.body);
      res.status(HttpStatus.OK).json({ message: AuthorMessages.AUTHOR_UPDATED });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: AuthorMessages.UPDATE_FAILED });
    }
  }

  static async deleteAuthor(req, res) {
    try {
      const id = req.params.id;
      await AuthorService.deleteAuthor(id);
      res.status(HttpStatus.OK).json({ message: AuthorMessages.AUTHOR_DELETED });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: AuthorMessages.DELETE_FAILED });
    }
  }
}

export default AuthorController;