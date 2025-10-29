const express = require("express");
const router = express.Router();

const books = [
  {
    id: 1,
    title: "Ender's Game",
    author: "Orson Scott Card",
  },
  {
    id: 2,
    title: "Dune",
    author: "Frank Herbert",
  },
  {
    id: 3,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
  },
  {
    id: 4,
    title: "1984",
    author: "George Orwell",
  },
  {
    id: 5,
    title: "The Martian",
    author: "Andy Weir",
  },
];
let count = books[books.length - 1].id + 1;

/* -------------------------------------------------------------------------- */
/*                                     GET                                    */
/* -------------------------------------------------------------------------- */
router.get("/", (req, res) => {
  res.status(200).json({
    message: `From the Book API route with ${req.method}`,
    books,
    success: true,
  });
});

router.get("/:id", (req, res) => {
  const ID = parseInt(req.params.id);
  const book = books.find((book) => book.id === ID);
  if (book === undefined || ID === NaN) {
    res.status(404).json({
      message: `Book cannot be found. Please check the id.`,
      success: false,
    });
  } else {
    res.status(200).json({
      message: `From the Book API route with ${req.method}`,
      book,
      success: true,
    });
  }
});

/* -------------------------------------------------------------------------- */
/*                                    POST                                    */
/* -------------------------------------------------------------------------- */
router.post("/", (req, res) => {
  const id = count++;
  books.push({ id, ...req.body });
  console.log("My Books: ", books);
  res.status(200).json({
    message: `From the Book API route with ${req.method}`,
    book: books[books.length - 1],
    success: true,
  });
});

/* -------------------------------------------------------------------------- */
/*                                     PUT                                    */
/* -------------------------------------------------------------------------- */
router.put("/", (req, res) => {
  res.status(200).json({
    message: `From the Book API route with ${req.method}`,
    success: true,
  });
});

router.put("/:id", (req, res) => {
  const ID = req.params.id;
  console.log(ID);
  res.status(200).json({
    message: `From the Book API route with ${req.method}`,
    id: ID,
    success: true,
  });
});

/* -------------------------------------------------------------------------- */
/*                                   DELETE                                   */
/* -------------------------------------------------------------------------- */
router.delete("/", (req, res) => {
  res.status(200).json({
    message: `From the Book API route with ${req.method}`,
    success: true,
  });
});

router.delete("/:id", (req, res) => {
  const ID = req.params.id;
  console.log(ID);
  res.status(200).json({
    message: `From the Book API route with ${req.method}`,
    id: ID,
    success: true,
  });
});

module.exports = router;
