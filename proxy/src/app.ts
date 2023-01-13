import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 8000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/api", (_, res) => {
  res.send("Hello API");
});

app.get("/api/.user", (_, res) => {
  axios.get("http://nginx/hello").then((onfulfilled) => {
    res.send(onfulfilled.data);
  }).catch((error)  => res.send(error.message));
});

app.post("/api/.user/inscription", (_, res) => {
  axios.post("http://nginx/inscription").then((onfulfilled) => {
    res.send(onfulfilled.data);
  })
  // .catch((error)  => res.send(error.message));
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
