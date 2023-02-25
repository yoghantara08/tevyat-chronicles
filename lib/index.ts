import axios from "axios";

const BASE_URL = "https://api.genshin.dev";

export const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
  },
});
