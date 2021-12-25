import axios from "axios";
import URL from "../constants/url.js";

export const axiosInstance = axios.create({
    baseURL: URL.baseURL
});
