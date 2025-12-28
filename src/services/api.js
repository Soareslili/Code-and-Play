import axios from "axios";

export const api = axios.create({
  baseURL: "https://devshop-backend.vercel.app",
});
