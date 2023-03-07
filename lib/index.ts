import axios from "axios";

const BASE_URL = "https://api.ambr.top/v2/en/";

export const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
  },
});

const BASE_URL2 = "https://api.genshin.dev";

export const _API = axios.create({
  baseURL: BASE_URL2,
  headers: {
    Accept: "application/json",
  },
});
