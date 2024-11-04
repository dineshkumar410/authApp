const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUserInfo,
} = require("../controllers/userController");
const auth = require("../middleware/authMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", auth, getUserInfo);

module.exports = router;
