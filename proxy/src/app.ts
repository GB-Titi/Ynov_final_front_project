import express from "express";
import bodyParser from "body-parser";

import tokenCheck from "./middlewares/tokenCheck";
import userService from "./services/user";

import { urlApi } from "./types";
const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(tokenCheck());

app.get(urlApi, (_, res) => {
  res.send("Hello API");
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
