import AuthorService from '../services/author/AuthorService.js';
import HttpStatus from '../helpers/enums/HttpStatus.js';
import { AuthorMessages } from '../helpers/enums/ResponseMessages.js';

class AuthorController {
  static async listAuthors(req, res) {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;

      const result = await AuthorService.getAllAuthors(page, limit);

      res.status(HttpStatus.OK).json({
        authors: result.authors,
        currentPage: page,
        totalPages: result.totalPages,
        totalAuthors: result.totalAuthors
      });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: AuthorMessages.REQUEST_FAILED });
    }
  }

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