import axios from "axios";

const env = import.meta.env;

const api = axios.create({
  baseURL: env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${env.VITE_API_KEY}`,
  },
});

export default api;
