// Import the required modules
const express = require("express");
const router = express.Router();

// Importing Middlewares
const {
  auth,
  isStudent,
} = require("../middlewares/auth");
const {getUserCart} = require("../controllers/Cart");

// Route to retrieve the user's cart
router.get("/", auth, isStudent, getUserCart);

module.exports = router;