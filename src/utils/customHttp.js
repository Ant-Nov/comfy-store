import axios from "axios";

export const customHttp = axios.create({
  baseURL: 'https://strapi-store-server.onrender.com/api',
});