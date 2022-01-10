import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import URL from "../constants/url";
import { FetchData } from "../types/fetchData";
import { ISort } from "../types/sort";

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({ baseUrl: URL.baseURL }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => `products`
        }),
        getSortedProducts: builder.query<FetchData & ISort, ISort>({
            query: ({
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
        })
    })
});

export const { useGetSortedProductsQuery, useGetAllProductsQuery } = productsApi;
