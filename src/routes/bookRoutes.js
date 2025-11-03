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
    message: `From the Book API route with ${req.method}. Please send a request with a book's id in the URL and a title and author in the body to update it.`,
    success: true,
  });
});

router.put("/:id", (req, res) => {
  const ID = parseInt(req.params.id);
  // Check if the user sent the required info
  try {
    if (req.body.title == undefined || req.body.title == "") {
      res.status(400).json({
        message: `A title is required (e.g., 'title': 'Think & Grow Rich')`,
        success: false,
      });
    }
    if (req.body.author == undefined || req.body.author == "") {
      res.status(400).json({
        message: `An author is required (e.g., 'author': 'Napoleon Hill')`,
        success: false,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: `Something went wrong. Did you include a body in your request?`,
      success: false,
    });
  }
  // If no error, continue to update the book
  const bookToBeUpdated = books.find((book) => book.id === ID);
  if (bookToBeUpdated === undefined || ID === NaN) {
    res.status(404).json({
      message: `Book cannot be found. Please check the id.`,
      success: false,
    });
  } else {
    bookToBeUpdated.title = req.body.title;
    bookToBeUpdated.author = req.body.author;
    res.status(200).json({
      message: `From the Book API route with ${req.method}`,
      updated_book: bookToBeUpdated,
      books,
      success: true,
    });
  }
});

/* -------------------------------------------------------------------------- */
/*                                   DELETE                                   */
/* -------------------------------------------------------------------------- */
router.delete("/", (req, res) => {
  res.status(200).json({
    message: `From the Book API route with ${req.method}. Please send a request with a book's id to delete it.`,
    success: true,
  });
});
// For the delete function I decided to go with the array splice method
// So in order to do that I had to find the index
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
router.delete("/:id", (req, res) => {
  const ID = parseInt(req.params.id);
  const bookToBeDeleted = books.find((book) => book.id === ID);
  if (bookToBeDeleted === undefined || ID === NaN) {
    res.status(404).json({
      message: `Book cannot be found. Please check the id.`,
      success: false,
    });
  } else {
    const index = books.findIndex(() => bookToBeDeleted);
    books.splice(index, 1);
    res.status(200).json({
      message: `From the Book API route with ${req.method}`,
      books,
      success: true,
    });
  }
});

module.exports = router;
