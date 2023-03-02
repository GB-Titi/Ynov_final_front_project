import express, { response } from "express";
import axios from "axios";
import bodyParser from "body-parser";
import tokenCheck from "./middlewares/tokenCheck";

const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(tokenCheck());

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
  const username = req.body.username;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const phone = req.body.phone;
  const nationality = req.body.nationality;
  new Promise((resolve) => {
    axios
      .post('http://nginx/api/login_check', { username, firstname, lastname, phone, nationality }, {
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

app.post("/api/.user/login", (req, res) => {
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
  // const token = req.header("Authorization");

  new Promise((resolve) => {
    axios
      .post(
        '/api/.user/checkRole',
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

app.get("/api/.user/future-user", (req, res) => {
  console.log("Récupération des futures users");

  // const token = req.header("Authorization");

  axios.get(" '/api/.user/future-user'",{
    headers: {
      Authorization: req.header("Authorization"),
    },
  }).then((onfulfilled) => {
    res.send(onfulfilled.data);
  }).catch((error) => res.send(error.message));
  // console.log(req)
  // new Promise((resolve) => {
  //   axios.get(
  //     '/api/future-user'
  //   )
  //     .then((response) => {
  //       console.log("On est dans réponse");
  //       resolve(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  //     .then((onfulfilled) => {
  //       console.log("On est dans le then");
  //       res.send(onfulfilled);
  //     });
  // })
})