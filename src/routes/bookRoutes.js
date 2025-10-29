const express = require("express");
const router = express.Router();
// localhost:5000/api/v1

const books = [];
let count = 1;

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
  console.log(typeof req.params.id);
  const ID = parseInt(req.params.id);
  const book = books.find((book) => book.id === ID);
  if (book === undefined) {
    res.status(404).json({
      message: `Book with ID: ${ID} cannot be found`,
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
