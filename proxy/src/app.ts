import express, { response } from "express";
import axios from "axios";
import bodyParser from "body-parser";
import tokenCheck from "./middleware/tokenCheck";

const app = express();
const port = 8000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(tokenCheck())

app.get("/api", (_, res) => {
  res.send("Hello API");
});

app.get("/api/.user", (_, res) => {
  axios.get("http://nginx/hello").then((onfulfilled) => {
    res.send(onfulfilled.data);
  }).catch((error) => res.send(error.message));
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

app.post("/api/.user/inscription", (req, res) => {
  const email = req.body.email;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const phone = req.body.phone;
  const nationality = req.body.nationality;
  // new Promise((resolve) => {
      axios
          .post('http://nginx/api/.user/inscription', { email, firstname, lastname, phone, nationality }, {
          headers: {
              "Content-Type": "application/json",
          },
      })
          .then((response) => {
          // resolve(response.data);
          res.send(response.data);
      })
          .catch((error) => {
          console.log(error);
      });
  // });
});

app.post("/api/.user/login", (req, res) => {
  const username = req.body.username
  const password = req.body.password
  
  console.log("i'm here 3")
  new Promise((resolve) => {
    axios
      .post(
        'http://nginx/api/login_check',
        { username, password }, 
        {
          headers: {
            "Content-Type": "application/json",
          },
        })
      .then((response) => {
        resolve(response.data);
        res.send(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  })


    ;
})

app.get("/api/.user/user", (_, res) => {
  res.send("user");
})

app.get("/api/.user/admin", (_, res) => {
  res.send("user");
})

app.post("/api/.user/checkRole", (req, res) => {
  const role = req.body.role;
  const token = req.header("Authorization");

  new Promise((resolve) => {
    axios
      .post(
        '/api/.user/checkRole',
        { role },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      )
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .then((onfulfilled) => {
        res.send(onfulfilled);
      });
  });
})