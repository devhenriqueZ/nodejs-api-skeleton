import express from "express";
import BookController from "../app/controllers/BookController.js";

const router = express.Router();

router.route('/books')
    .get(BookController.listBooks)
    .post(BookController.createBook);

router.route('/books/search/:author')
    .get(BookController.getBooksByAuthor);

router.route('/books/:id')
    .get(BookController.getBookById)
    .put(BookController.updateBook)
    .delete(BookController.deleteBook);

export default router;