import { Express } from "express";
import axios from "axios";

import {
  endPointServiceUserAdminInfo,
  endPointServiceUserHello,
  urlApiAdminInfo,
  urlApiUserInscription,
  endPointServiceUserLogin,
  urlApiCheckRole,
  urlApiUser,
  urlApiUserInfo,
  urlApiUserLogin,
  endPointServiceUserInscription,
  endPointServiceUserFutureUser,
  urlApiUserFutureUser
} from "../types";

import { checkRole, checkUserInfo, login, inscription } from "../userFunctions";

const initUrls = (app: Express) => {
  app.get(urlApiUser, (_, res) => {
    axios.get(endPointServiceUserHello).then((onfulfilled) => {
      res.send(onfulfilled.data);
    });
  });

  // app.post(urlApiUserLogin, (req, res) => {
  //   const body: { username: string; password: string } = req.body;
  //   login(body.username, body.password).then((data) => {
  //     res.send(data);
  //   });
  // });
  app.post(urlApiUserLogin, (req, res) => {
    const body: { username: string; password: string } = req.body;
      axios
      .post(endPointServiceUserLogin, {
        headers: {
          Authorization: req.header("Authorization"),
        },
      })
      login(body.username, body.password).then((data) => {
        res.send(data);
      });
  });

  app.get(urlApiUserInfo, (req, res) => {
    const token = req.header("Authorization");
    checkUserInfo(token).then((onfulfilled) => res.send(onfulfilled));
  });

  app.get(urlApiAdminInfo, (req, res) => {
    axios
      .get(endPointServiceUserAdminInfo, {
        headers: {
          Authorization: req.header("Authorization"),
        },
      })
      .then((onfulfilled) => res.send(onfulfilled.data));
  });

  app.post(urlApiCheckRole, (req, res) => {
    const body: { role: string } = req.body;
    const token = req.header("Authorization");
    checkRole(body.role, token).then((onfulfilled) => {
      res.send(onfulfilled);
    });
  });

  app.post(urlApiUserInscription, (req, res) => {
    const body: { email: string, firstname: string, lastname: string, phone_number: string, nationality: string} = req.body;
    // const token = req.header("Authorization");
    axios.post(endPointServiceUserInscription).then(() => {
      // res.send(onfulfilled.data);
      inscription(body.email, body.firstname, body.lastname, body.nationality, body.phone_number).then(() => {
        res.send("Done");
      });
    });
  });

  app.get(urlApiUserFutureUser, (req, res) => {
    console.log( req.header("Authorization"))
    axios
      .get(endPointServiceUserFutureUser, {
        headers: {
          Authorization: req.header("Authorization"),
        },
      })
      // .then(() => console.log(Authorization))
      .then((onfulfilled) => res.send(onfulfilled.data));
  });
};

export default { initUrls };