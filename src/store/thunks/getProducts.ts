import URL from "../../constants/url";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axios";
import { ISort } from "../../models/Sort";
import { FetchData } from "../../models/Thunks";
export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async (sortObj: ISort) => {
        try {
            const { data } = await axiosInstance.get<FetchData>(
                URL.getSortedProducts(sortObj)
            );
            return data;
        } catch (e) {
            throw new Error("Something went wrong (request error)");
        }
    }
);

export default fetchProducts;
