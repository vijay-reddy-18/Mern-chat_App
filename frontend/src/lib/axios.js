import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" 
    ? "http://localhost:8080/api"  // ✅ Correct localhost URL
    : "https://mern-chat-app-8m1q.onrender.com/api", // ✅ Correct deployed backend URL
  withCredentials: true, // ✅ Ensures cookies are sent and received
});
