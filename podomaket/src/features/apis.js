import axios from "axios";

export const addProductApi = (product) => {
  axios.post("http://localhost:3001/products", product);
};

export const addUserApi = (users) => {
  axios.post("http://localhost:3001/users/signup", users);
};
