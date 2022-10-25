import axios from "axios";

const DATA_URL = "http://54.173.186.166:8080";

// const instance = axios.create({
//   baseURL: "http://54.173.186.166:8080",
//   headers: {
//     token: "",
//     username: "",
//   },
// });

// product
export const addProductApi = (product) => {
  axios.post(`${DATA_URL}/products`, product);
};

export const delPostAPI = async (id) => {
  const response = await axios.delete(`${DATA_URL}/products/${id}`);
  return response.data;
};

export const updateProductAPI = async (id, edit) => {
  await axios.patch(`${DATA_URL}/products/${id}`, edit);
};

// profile
export const updateProfileAPI = async (id, edit) => {
  await axios.patch(`${DATA_URL}/mypage/${id}`, edit);
};

// user
export const addUserApi = (users) => {
  axios.post("http://54.173.186.166:8080/users/signup", users);
};

export const setUserApi = (login) => {
  axios.post("http://54.173.186.166:8080/users/login", login);
};
