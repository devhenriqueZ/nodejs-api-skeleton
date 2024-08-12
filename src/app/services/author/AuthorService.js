import AuthorRepository from '../../repositories/AuthorRepository.js';
import { AuthorMessages } from '../../helpers/enums/ResponseMessages.js';

class AuthorService {
  static async getAllAuthors(page, limit) {
    try {
      const result = await AuthorRepository.findAllAuthors(page, limit);
      return result;
    } catch (error) {
      throw new Error(AuthorMessages.RETRIEVE_FAILED);
    }
  }

  static async getAuthorById(id) {
    try {
      return await AuthorRepository.findAuthorById(id);
    } catch (error) {
      throw new Error(AuthorMessages.RETRIEVE_FAILED);
    }
  }

  static async createNewAuthor(authorData) {
    try {
      return await AuthorRepository.createAuthor(authorData);
    } catch (error) {
      throw new Error(AuthorMessages.CREATE_FAILED);
    }
  }

  static async updateExistingAuthor(id, authorData) {
    try {
      return await AuthorRepository.updateAuthor(id, authorData);
    } catch (error) {
      throw new Error(AuthorMessages.UPDATE_FAILED);
    }
  }

  static async deleteAuthor(id) {
    try {
      await AuthorRepository.deleteAuthor(id);
      return AuthorMessages.AUTHOR_DELETED;
    } catch (error) {
      throw new Error(AuthorMessages.DELETE_FAILED);
    }
  }
}

export default AuthorService;