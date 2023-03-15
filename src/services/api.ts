import axios from "axios";

export const api = axios.create({
  // baseURL: "https://quid-rodrigo001.vercel.app",
  baseURL: "http://localhost:3000",
});
