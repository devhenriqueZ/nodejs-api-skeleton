import mongoose from 'mongoose';

const AuthorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  nationality: { type: String },
}, { versionKey: false });

const Author = mongoose.model('Author', AuthorSchema, 'authors');

export { Author, AuthorSchema };