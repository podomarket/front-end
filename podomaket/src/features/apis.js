import axios from "axios";

export const addProductApi = (product) => {
  axios.post("http://localhost:3001/products", product);
};

export const addUserApi = (users) => {
  axios.post("http://34.201.116.215:8080/user/signup", users);
};
