const express = require("express");
const router = express.Router();
const bookRoutes = require("./bookRoutes");

// localhost:5000/api/v1
router.get("/", (req, res) => {
  res.status(200).json({
    message: "This is from the API base route",
    success: true,
  });
});

// localhost:5000/api/v1/books
router.use("/books", bookRoutes);

module.exports = router;
