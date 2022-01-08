import { ISort } from "../models/Sort";

const URL = {
    baseURL: "https://yalantis-react-school-api.yalantis.com/api/v1/",
    getProducts: "products",
    getSortedProducts: ({
        origin,
        page,
        perPage,
        maxPrice,
        minPrice
    }: ISort): string => {
        const pageUrl = "page=" + page;
        const perPageUrl = `&perPage=` + perPage;
        const originUrl = origin !== "" ? "&origins=" + origin : "";
        const minPriceUrl = minPrice != null ? "&minPrice=" + minPrice : "";
        const maxPriceUrl = maxPrice != 0 ? "&maxPrice=" + maxPrice : "";

        return `products?${pageUrl}${perPageUrl}${originUrl}${minPriceUrl}${maxPriceUrl}`;
    }
};

export default URL;
