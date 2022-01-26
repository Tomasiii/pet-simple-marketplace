import axios from "axios";
import URL from "../constants/url";

export const axiosInstance = axios.create({
    baseURL: URL.baseURL,
    headers: {
        Authorization: `${process.env.REACT_APP_AUTHORIZATION}`,
        accept: "application/json",
        "Content-Type": "application/json"
    }
});
