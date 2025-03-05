import express from "express";
import fs from "fs";
const app = express();
const port = "3000";

app.get("/", (req, res) => {
  res.send(`<h1>welcome to Homepage</h1>`);
});

app.get("/about", (req, res) => {
  res.send("<h1>welcome to about me</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>welcome to contact me</h1>");
});

app.listen(port);
