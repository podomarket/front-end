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

export const delPostAPI = async (id) => {
  const response = await axios.delete(`http://localhost:3001/products/${id}`);
  return response.data;
};

export const updateProductAPI = async (id, edit) => {
  await axios.patch(`http://localhost:3001/products/${id}`, edit);
};

// user

export const addUserApi = (users) => {
  axios.post("http://54.173.186.166:8080/users/signup", users);
};

export const setUserApi = (login) => {
  axios.post("http://54.173.186.166:8080/users/login", login);
};

//comments

export const addCommentsApi = (id, comments) => {
  axios.post(`http://54.173.186.166:8080/products/${id}/comments`, comments);
};
