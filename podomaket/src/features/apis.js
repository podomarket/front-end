import axios from "axios";

export const addProductApi = (product) => {
  axios.post("http://localhost:8080/products", product);
};
