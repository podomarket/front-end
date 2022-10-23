import axios from "axios";

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
