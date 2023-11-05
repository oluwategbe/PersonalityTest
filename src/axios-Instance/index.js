import axios from "axios";
import { baseURL } from "./constants";

// const config = { baseURL: baseURL };
axios.defaults.baseURL = baseURL;
export const axiosInstance = axios.create();
