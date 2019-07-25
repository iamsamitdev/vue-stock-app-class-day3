import axios from "axios";

let urlAPI = "http://localhost:3000";

const apiClient = axios.create({
  baseURL: urlAPI,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getProducts() {
    return apiClient.get("/products");
  }
};
