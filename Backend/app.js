import express from "express";
import { nanoid } from "nanoid";
import dotenv from "dotenv";
import connectDB from "./src/config/mongodb.config.js";
import urlSchema from "./src/models/shorturl.model.js";

dotenv.config("./.env");
const app = express();

//get - redirection
//post - create short url

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/create", (req, res) => {
  const { url } = req.body;
  const shortUrl = nanoid(7);
  const newUrl = new urlSchema({
    full_url:url,
    short_url:shortUrl,
  })
  newUrl.save();
  res.send(nanoid(7))
  console.log(url);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(3000, () => {
  connectDB();
  console.log("Server is running on port http://localhost:3000");
});
