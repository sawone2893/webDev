const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const app = express();

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extends: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

let getUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

//Generating bulk users
let getUsersInBulk = (count) => {
  let users = [];
  for (let i = 0; i < count; i++) {
    users.push(getUser());
  }
  return users;
};

// Create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "shabryn2893",
  database: "delta_app",
  password: "Mysql2893#",
});

// //Inserting records in user table.
// let query = "INSERT INTO user(id,username,email,password) VALUES ?";
// try {
//   // A simple SELECT query
//   connection.query(query, [users], (err, results) => {
//     if (err) throw err;
//     console.log(results); // results contains rows returned by server
//     //console.log(fields); // fields contains extra meta data about results, if available
//   });
// } catch (error) {
//   console.log(error);
// }

//GET Fetch and show total numbers of users on our app
app.get("/", (req, res) => {
  let query = "SELECT count(*) from user";
  try {
    connection.query(query, (err, results) => {
      if (err) throw err;
      let count = results[0]["count(*)"];
      res.render("home.ejs", { count });
    });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

/**Show Route:
 *
 */

app.get("/user", (req, res) => {
  let query = "SELECT * from user";
  try {
    connection.query(query, (err, users) => {
      if (err) throw err;
      res.render("showUsers.ejs", { users });
    });
  } catch (error) {
    res.send(error);
  }
});

/**
 * GET /user/:id/edit => To get the form to edit the username, based on id.
 *                       This form will require password.
 * PATCH /user/:id => To edit username ,if correct password was entered in form.
 */
//Edit Route
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let query = `SELECT * from user where id='${id}'`;
  try {
    connection.query(query, (err, results) => {
      if (err) throw err;
      let user = results[0];
      res.render("edit.ejs", { user });
    });
  } catch (error) {
    res.send(error);
  }
});
//Update route
app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { username: newUsername, password: formPassword } = req.body;
  let query = `SELECT password from user where id='${id}'`;
  try {
    connection.query(query, (err, results) => {
      if (err) throw err;
      let expectedPassword = results[0]["password"];
      if (formPassword === expectedPassword) {
        let q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
        connection.query(q2, (err, result) => {
          if (err) throw err;
          res.redirect("/user");
        });
      } else {
        res.send(`You enter wrong password.`);
      }
    });
  } catch (error) {
    res.send(error);
  }
});

/**
 * Create a form to add a new user  to the database
 */
//Create route
app.get("/user/new", (req, res) => {
  res.render("newUser.ejs");
});
//Create route
app.post("/user/new", (req, res) => {
  let { username, email, password } = req.body;
  let id = faker.string.uuid();
  let query = `INSERT INTO user(id,username,email,password) VALUES ('${id}','${username}','${email}','${password}')`;
  try {
    connection.query(query, (err, results) => {
      if (err) throw err;
      res.redirect("/user");
    });
  } catch (error) {
    res.send(error);
  }
});

/**
 * Create a form  to delete a user  from database if they enter correct email id and pssword.
 */
//Fetching delete form
app.get("/user/:id/delete", (req, res) => {
  let { id } = req.params;
  let query = `SELECT * from user where id='${id}'`;
  try {
    connection.query(query, (err, results) => {
      if (err) throw err;
      let user = results[0];
      res.render("delete.ejs", { user });
    });
  } catch (error) {
    res.send(error);
  }
});

//Delete route
app.delete("/user/:id/delete", (req, res) => {
  let { id } = req.params;
  let { email: formEmail, password: formPassword } = req.body;
  let query = `SELECT * from user where id='${id}'`;
  try {
    connection.query(query, (err, results) => {
      if (err) throw err;
      let user = results[0];
      if(user.email===formEmail && user.password===formPassword){
        let q2=`DELETE FROM user where id='${id}'`;
        connection.query(q2, (err, results) => {
          res.redirect("/user");
        });
      }else{
        res.send("You entered wrong email or password!");
      }
    });
  } catch (error) {
    res.send(error);
  }
});

//Start Server
let port = 8080;
app.listen(port, () => {
  console.log(`Server listening to prot ${port}`);
});
