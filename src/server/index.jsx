import axios from "axios";

const request = axios.create({
  baseURL: "https://blog-backend-production-a0a8.up.railway.app/",
  timeout: 1000,
});
export default request;
