import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

// import tokenCheck from "./middlewares/tokenCheck";
import userService from "./services/user";
import { checkRole, checkUserInfo, login, inscription } from "./userFunctions";

import { urlApi, urlApiUserLogin, urlApiUserInscription, urlApiCheckRole, endPointServiceUserLogin, urlApiUserFutureUser } from "./types";
const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(tokenCheck());

app.get(urlApi, (_, res) => {
  res.send("Hello API");
});

app.post(urlApiUserLogin, (req, res) => {
  const username = req.body.username
  const password = req.body.password

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
  });
})

app.post(urlApiUserInscription, (req, res) => {
  const email = req.body.email;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const phone = req.body.phone;
  const nationality = req.body.nationality;
  new Promise((resolve) => {
    axios
      .post('http://nginx/api/.user/inscription', { email, firstname, lastname, phone, nationality }, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        resolve(response.data);
        res.send(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
});

app.get(urlApiUserFutureUser, (req, res) => {
  console.log("Récupération des futures users");

  axios.get("http://nginx/api/.user/future-user").then((onfulfilled) => {
    res.send(onfulfilled.data);
  }).catch((error) => res.send(error.message));
})

app.post(urlApiCheckRole, (req, res) => {
  const role = req.body.role;
  // const token = req.header("Authorization");
  new Promise((resolve) => {
    axios
      .post(
        '/api/.user/check_role',
        { role },
        {
          headers: {
            Authorization: req.header("Authorization"),
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

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
