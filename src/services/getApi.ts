import axios from "axios";

export const getApi = axios.create({
  baseURL: "https://fdlmx-backgrounds.sfo3.digitaloceanspaces.com",
  timeout: 5000,
});
