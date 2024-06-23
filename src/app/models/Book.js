import mongoose from 'mongoose';
import { Author } from './Author.js';

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number },
  pages: { type: Number },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author', required: true }
}, { versionKey: false });

const Book = mongoose.model('Book', BookSchema, 'books');

export default Book;