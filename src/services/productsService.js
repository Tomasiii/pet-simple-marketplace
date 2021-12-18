import axios from "axios";
import productsURL from "../constants/url.js";

export const axiosInstance = axios.create({
    baseURL: "https://yalantis-react-school-api.yalantis.com/api/v1/"
});

const productsService = {
    getProducts: () => axiosInstance.get(productsURL.getProducts)
};

export const { getProducts } = productsService;
