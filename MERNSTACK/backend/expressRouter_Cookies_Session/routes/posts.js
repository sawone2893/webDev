const express = require("express");
const router = express.Router();

//posts
router.get("/", (req, res) => {
  res.send("GET: Show all posts");
});

router.get("/:id", (req, res) => {
  res.send("GET: Show post using id");
});

router.post("/", (req, res) => {
  res.send("POST: Create posts");
});

router.patch("/:id", (req, res) => {
  res.send("PATCH: Update post using id");
});

router.delete("/:id", (req, res) => {
  res.send("PATCH: Delete post using id");
});

module.exports = router;
