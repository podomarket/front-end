import axios from "axios";

// product

export const addProductApi = (product) => {
  axios.post("http://localhost:3001/products", product);
};

export const delPostAPI = async (id) => {
  const response = await axios.delete(`http://localhost:3001/products/${id}`);
  return response.data;
};

export const updateProductAPI = async (id, edit) => {
  await axios.patch(`http://localhost:3001/products/${id}`, edit);
};

// user

export const addUserApi = (users) => {
  axios.post("http://34.201.116.215:8080/user/signup", users);
};

export const getUserApi = (login) => {
  axios.post("http://localhost:3001/user/login", login);
};
