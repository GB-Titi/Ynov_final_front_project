import axios from "axios";
import {
  endPointServiceUserCheckRole,
  endPointServiceUserFutureUser,
  endPointServiceUserInfo,
  endPointServiceUserLogin,
  endPointServiceUserInscription,
} from "./types";

export const login = (username: string, password: string) => {
  return new Promise((resolve) => {
    axios
      .post(
        endPointServiceUserLogin,
        { username, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

export const checkUserInfo = (token: string) => {
  return new Promise((resolve) => {
    axios
      .get(endPointServiceUserInfo, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => resolve(response.data));
  });
};

export const checkRole = (role: string, token: string) => {
  return new Promise((resolve) => {
    axios
      .post(
        endPointServiceUserCheckRole,
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
      });
  });
};

export const futureUser = (token: string) => {
    return new Promise((resolve) => {
      axios
        .get(endPointServiceUserFutureUser, {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => resolve(response.data));
    });
  };
  

  export const inscription = (email: string, firstname: string, lastname: string, phone_number: string, nationality: string) => {
    return new Promise((resolve) => {
      axios
        .post(
          endPointServiceUserInscription,
          { email, firstname, lastname, phone_number, nationality},
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };