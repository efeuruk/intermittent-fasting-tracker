import axios from "axios";

const env = import.meta.env;

const api = axios.create({
  baseURL: env.VITE_API_URL,
});

export default api;
