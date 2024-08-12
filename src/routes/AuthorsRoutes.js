import express from "express";
import AuthorController from "../app/controllers/AuthorController.js";

const router = express.Router();

router.route('/authors')
    .get(AuthorController.listAuthors)
    .post(AuthorController.createAuthor);

router.route('/authors/:id')
    .get(AuthorController.getAuthorById)
    .put(AuthorController.updateAuthor)
    .delete(AuthorController.deleteAuthor);

export default router;