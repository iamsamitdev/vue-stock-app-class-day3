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
  },
  getProduct(id) {
    return apiClient.get("/products/" + id);
  },
  addProduct(data) {
    return apiClient.post("/products", data);
  },
  updateProduct(id, data) {
    return apiClient.put("/products/" + id, data);
  },
  deleteProduct(id) {
    return apiClient.delete("/products/" + id);
  }
};
