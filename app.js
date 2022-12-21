//import express dan router
const express = require("express");
const router = require("./routes/api");

//membuat object express
const app = express();

//use middleware
app.use(express.json());
app.use(express.urlencoded());

//menggunakan router
app.use(router);

//mendefinisikan port
app.listen(3000),
  () => {
    console.log("Server running at http://localhost:3000/");
  };
