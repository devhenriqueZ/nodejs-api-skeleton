import { Author } from "../models/Author.js";

class AuthorRepository {
  static async findAllAuthors({ page = 1, limit = 10 }) {
    const offset = (page - 1) * limit;
    const [authors, totalAuthors] = await Promise.all([
      Author.find({}).skip(offset).limit(limit),
      Author.countDocuments(),
    ]);
    return {
      authors,
      totalPages: Math.ceil(totalAuthors / limit),
      totalAuthors,
    };
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