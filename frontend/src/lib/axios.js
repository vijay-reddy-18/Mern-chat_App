/*import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "http://localhost:/api" : "/api",
  withCredentials: true,
});*/
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api",
  withCredentials: true, // ✅ Ensures JWT is sent with requests
});
