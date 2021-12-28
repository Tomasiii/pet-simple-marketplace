import axios from "axios";
import URL from "../constants/url";

export const axiosInstance = axios.create({
    baseURL: URL.baseURL
});
