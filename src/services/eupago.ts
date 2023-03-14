import axios from "axios";

export const eupago = axios.create({
  baseURL: "https://sandbox.eupago.pt/clientes/rest_api",
  headers: {
    accept: "application/json",
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
