import axios from "axios";

// product

export const addProductApi = (product) => {
  axios.post("http://localhost:3001/products", product);
};

// user

export const addUserApi = (users) => {
  axios.post("http://34.201.116.215:8080/user/signup", users);
};

export const getUserApi = (login) => {
  axios.post("http://34.201.116.215:8080/user/login", login);
};
