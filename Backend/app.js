import express from "express";
import { nanoid } from "nanoid";
import dotenv from "dotenv";
import connectDB from "./src/config/mongodb.config.js";

dotenv.config("./.env");
const app = express();

//get - redirection
//post - create short url

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/create", (req, res) => {
  res.send(nanoid(5));
  const { url } = req.body;
  console.log(url);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(3000, () => {
  connectDB();
  console.log("Server is running on port http://localhost:3000");
});
