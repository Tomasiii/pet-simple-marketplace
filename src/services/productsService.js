import axios from "axios";
import URL from "../constants/url.js";

export const axiosInstance = axios.create({
    baseURL: URL.baseURL
});

const productsService = {
    getProducts: () => axiosInstance.get(URL.getProducts)
};

export const { getProducts } = productsService;
