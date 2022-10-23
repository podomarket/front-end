import axios from "axios";

// const instance = axios.create({
//   baseURL: "http://54.173.186.166:8080",
//   headers: {
//     token: "",
//     username: "",
//   },
// });

// product

export const addProductApi = (product) => {
  axios.post("http://localhost:3001/products", product);
};

// user

export const addUserApi = (users) => {
  axios.post("http://54.173.186.166:8080/users/signup", users);
};

export const setUserApi = (login) => {
  axios.post("http://54.173.186.166:8080/users/login", login);
};
