import axios from "axios";

const BASE_URL = "https://api.ambr.top/v2/en/";

export const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
  },
});
