/** Server URL */
export const urlApi = "/api";
export const urlApiUser = `${urlApi}/.user`;
export const urlApiUserLogin = `${urlApiUser}/login`;
export const urlApiUserInfo = `${urlApiUser}/user`;
export const urlApiAdminInfo = `${urlApiUser}/admin`;
export const urlApiCheckRole = `${urlApiUser}/checkRole`;
export const urlApiUserInscription = `${urlApiUser}/inscription`;
export const urlApiUserFutureUser = `${urlApiUser}/future-user`;

/** Service User */
export const urlServerServiceUser = "http://nginx/api/.user";
export const endPointServiceUserHello = `${urlServerServiceUser}/hello`;
export const endPointServiceUserLogin = `${urlServerServiceUser}/login_check`;
export const endPointServiceUserInfo = `${urlServerServiceUser}/user`;
export const endPointServiceUserAdminInfo = `${urlServerServiceUser}/admin`;
export const endPointServiceUserCheckRole = `${endPointServiceUserInfo}/check_role`;
export const endPointServiceUserInscription = `${urlServerServiceUser}/inscription`;
export const endPointServiceUserFutureUser = `${urlServerServiceUser}/future-user`;

// export const urlsAcceptedWithoutConnection = [
//   urlApi,
//   urlApiUser,
//   urlApiUserLogin,
//   urlApiUserInscription,
//   endPointServiceUserInscription,
//   endPointServiceUserLogin,
//   endPointServiceUserHello,
// ];