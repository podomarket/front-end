import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_URL,
});

const token = localStorage.getItem("Authorization");

instance.defaults.headers.common["Authorization"] = token ? `${token}` : null;
export default instance;
