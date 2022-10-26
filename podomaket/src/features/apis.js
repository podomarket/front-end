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

export const getDetailProductAPI = async (id) => {
  await axios.get(`http://54.173.186.166:8080/products/${id}`);
};
// profile
export const updateProfileAPI = async (id, edit) => {
  await axios.patch(`${DATA_URL}/mypage/${id}`, edit);
};

export const getProfileOneAPI = async (id) => {
  await axios.get(`http://localhost:3000/mypage/${id}`);
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
  axios.post(`${DATA_URL}/products/comments`, comments, {
    headers: {
      Authorization: localStorage.getItem("accessToken"),
      "Refresh-Token": localStorage.getItem("refreshToken"),
    },
  });
};

export const getCommentsApi = (id, comments) => {
  axios.get(`${DATA_URL}/products/${id}/comments`);
};
