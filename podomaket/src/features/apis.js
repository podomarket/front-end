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
  const response = await axios.delete(`${DATA_URL}/products/${id}`, {
    headers: {
      Authorization: localStorage.getItem("accessToken"),
      "Refresh-Token": localStorage.getItem("refreshToken"),
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const updateProductAPI = async (id, edit) => {
  await axios.patch(`${DATA_URL}/products/${id}`, edit);
};

export const getDetailProductAPI = async (payload) => {
  const response = await axios.get(
    `http://54.173.186.166:8080/products/${payload.id}`
  );
  return response.data;
};

// profile
export const updateProfileAPI = async (id, edit) => {
  await axios.patch(`${DATA_URL}/mypage/${id}`, edit);
};

export const getProfileOneAPI = async (id) => {
  await axios.get(`http://54.173.186.166:8080/mypage/${id}`);
};

// user
export const addUserApi = (users) => {
  axios.post("http://54.173.186.166:8080/users/signup", users);
};

export const setUserApi = (login) => {
  axios.post("http://54.173.186.166:8080/users/login", login);
};

//comments //

export const addCommentsApi = (payload) => {
  const frm = new FormData();
  frm.append("content", payload.content);
  // console.log("api consolelog임", payload);
  axios.post(`${DATA_URL}/products/${payload.id}/comments`, frm, {
    headers: {
      Authorization: localStorage.getItem("accessToken"),
      "Refresh-Token": localStorage.getItem("refreshToken"),
      "Content-Type": "application/json",
    },
  });
};

export const getCommentsApi = (payload) => {
  // console.log("get=>", payload);
  axios.get(`${DATA_URL}/products/${payload.id}`);
};

export const delCommentAPI = async (payload) => {
  const response = await axios.delete(
    `${DATA_URL}/products/comments/${payload}`,
    {
      headers: {
        Authorization: localStorage.getItem("accessToken"),
        "Refresh-Token": localStorage.getItem("refreshToken"),
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

// 중복확인 api

export const duplicationCheckAPI = async (userid) => {
  let return_value;
  await axios
    .post("http://54.173.186.166:8080/users", {
      userid: userid,
    })
    .then((response) => {
      return_value = response.data;
    })
    .catch(function (error) {
      console.log(error);
      return_value = true;
    });
  return return_value;
};
