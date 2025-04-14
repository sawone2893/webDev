const express = require("express");
const router = express.Router();

//Users
router.get("/", (req, res) => {
  res.send("GET: Show all users");
});

router.get("/:id", (req, res) => {
  res.send("GET: Show user using id");
});

router.post("/", (req, res) => {
  res.send("POST: Create users");
});

router.patch("/:id", (req, res) => {
  res.send("PATCH: Update user using id");
});

router.delete("/:id", (req, res) => {
  res.send("PATCH: Delete user using id");
});

module.exports = router;
