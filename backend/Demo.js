const express = require("express");
const cors = require("cors");
const cores = require("os");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  console.log(req);
  res.send("Hey welcome to server");
});

app.get("/blog/newBlog", (req, res) => {
  res.status(200).json("All blogs []");
});

app.get("/blog/GetBlog/:ID", (req, res) => {
  console.log(req.params);
  res.status(200).json(req.params);
});

app.get("/blogs/Category/:category", (req, res) => {
  console.log(req.params);
  res.status(200).json(req.params);
});

app.post("/add-item", (req, res) => {
  console.log(req.body);
  res.send("Item has been created");
});

app.post("/postUserDetails", (req, res) => {
  console.log("Post user details route");
  res.send("post user details route");
});

app.put("/postUserDetails", (req, res) => {
  res.send("User details has been updated");
});

app.delete("/deleteUserDetails", (req, res) => {
  res.send("User details has been deleted successfully");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
