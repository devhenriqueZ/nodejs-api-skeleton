// AuthorRepository.js
import { Author } from "../models/Author.js";

class AuthorRepository {
  static async findAllAuthors() {
    return await Author.find({});
  }

  static async findAuthorById(id) {
    return await Author.findById(id);
  }

  static async createAuthor(authorData) {
    return await Author.create(authorData);
  }

  static async updateAuthor(id, authorData) {
    return await Author.findByIdAndUpdate(id, authorData);
  }

  static async deleteAuthor(id) {
    return await Author.findByIdAndDelete(id);
  }
}

export default AuthorRepository;