import { Router } from "express";
import { bookController} from '../controllers/booksController.js'

export const bookRouters = (BOOKS) => {
  const bookRouter = Router();
  const { getBooks, createBooks, getBookById, putBookById, deleteById } = bookController(BOOKS)

  bookRouter.route("/books")
    .get(getBooks)
    .post(createBooks)

  bookRouter.route("books/:id")
    .get(getBookById)
    .put(putBookById)
    .delete(deleteById)
  return bookRouter;
};