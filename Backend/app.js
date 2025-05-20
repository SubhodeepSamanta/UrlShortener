import express from "express";
import { nanoid } from "nanoid";
import dotenv from "dotenv";
import connectDB from "./src/config/mongodb.config.js";
import urlSchema from "./src/models/shortUrl.model.js";
import shortUrl from "./src/routes/shortUrl.route.js";
import { redirectFromShortUrl } from "./src/controllers/shortUrl.controller.js";
import { errorHandler } from "./src/utils/errorHandler.js";

dotenv.config("./.env");
const app = express();

//get - redirection
//post - create short url

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/create",shortUrl);
app.get("/:id",redirectFromShortUrl);
app.use(errorHandler)

app.listen(3000, () => {
  connectDB();
  console.log("Server is running on port http://localhost:3000");
});
