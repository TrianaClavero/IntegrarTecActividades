import { request, response } from "express";
import { v4 as uuid } from "uuid";

export const bookController = (BOOKS) => {
  const getBooks = (_request, response) => {
    return response.json(BOOKS);
  };

  const createBooks = (request, response, next) => {
    const newBook = request.body;
    const books = structuredClone(BOOKS);
    try {
      if (!newBook.title || !newBook.author) {
        throw new Error("Title and author required");
      }
      books.push({
        id: uuid(),
        ...newBook,
      });
      return response.status(200).json(books);
    } catch (error) {
      next(error);
    }
  };

  const getBookById = (request, response) => {
    const { id } = request.params;
    const book = BOOKS.find((book) => book.id === id);
    if (!book) {
      return response.status(404).json({ message: "Book not found" });
    }
    return response.status(200).json(book);
  };

  const putBookById = (req, res) => {
    const { id } = request.params;
    const books = structuredClone(BOOKS);
    const book = books.find((book) => book.id === id);
    if (!book) {
      return response.status(404).json({ message: "Book not found" });
    }
    const updatedBook = req.body;
    const index = books.indexOf(book);
    books.splice(index, 1, { id: book.id, ...updatedBook });
    return res.status(200).json(books);
  };

  const deleteById = (req, res) => {
    const { id } = req.params;
    const books = structuredClone(BOOKS);
    const book = books.find((book) => book.id === id);
    if (!book) {
      return response.status(404).json({ message: "Book not found" });
    }
    const index = books.indexOf(book);
    books.splice(index, 1);
    return res.status(200).json(books);
  };

  return {
    getBooks,
    createBooks,
    getBookById,
    putBookById,
    deleteById,
  };
};
