const express = require("express");
const path = require("path");
const { v4: uuidv4 } = require("uuid"); //This is used to generate unique ids.
const methodOverride = require("method-override"); //this is to overide form method as form does not support patch and delete request.
const app = express();

// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

let posts = [
  { id: uuidv4(), username: "sawone", content: "I love Coding" },
  { id: uuidv4(), username: "shabRayn", content: "I love Coding too" },
  { id: uuidv4(), username: "apnaCollege", content: "I love programming" },
  { id: "1a", username: "sawone", content: "I love Coding" },
];

//Implement: GET /posts - index route
app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

/*Implement: POST /post - to add new post.
To acheive above functionality, we need to create to 2 routes
1. to get new form:  GET /posts/new
2. to add the new post:   POST /posts
*/

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  let id = uuidv4();
  posts.push({ id, username, content });
  res.redirect("/posts"); // redirect method is used to redirect our resonse to some other end point or url.
});

/**
 * Implement GET /posts/:id - shouw route
 * GET /posts/:id to get one post (using id)
 */

app.get("/posts/:id", (req, res) => {
  try {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    if (!post) {
      return res.status(404).send("Post not found");
    }
    res.render("show.ejs", { post });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

/**
 * Implement PATCH /posts/:id - update route
 * PATCH /posts/:id to update specific post
 */

app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let newContent = req.body.content;
  let post = posts.find((p) => id === p.id);
  post.content = newContent;
  res.redirect("/posts");
});

/**
 * Create form for update
 * Serve the edit form GET /posts/:id/edit - edit route
 */

app.get("/posts/:id/edit", (req, res) => {
  try {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    if (!post) {
      return res.status(404).send("Post not found");
    }
    res.render("edit.ejs", { post });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

/**
 * Impelement: post/:id
 * DELETE /post/:id to delete specifc post - destroy route
 */

app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((p) => id !== p.id);
  res.redirect("/posts");
});

const port = 8080;
app.listen(port, () => {
  console.log(`Listening at port: ${port}`);
});
