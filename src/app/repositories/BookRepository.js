import Book from "../models/Book.js";

class BookRepository {
  static async findAll() {
    return await Book.find({}).populate('author');
  }

  static async findById(id) {
    return await Book.findById(id).populate('author');
  }

  static async create(bookData) {
    return await Book.create(bookData);
  }

  static async update(id, newData) {
    return await Book.findByIdAndUpdate(id, newData, { new: true }).populate('author');
  }

  static async delete(id) {
    return await Book.findByIdAndDelete(id);
  }

  static async findByAuthor(authorId) {
    return await Book.find({ author: authorId }).populate('author');
  }
}
export default BookRepository;