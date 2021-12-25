import URL from "../../constants/url";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axios";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    try {
        const { data } = await axiosInstance.get(URL.getProducts);
        return data;
    } catch (e) {
        throw new Error("Something went wrong");
    }
});
export default fetchProducts;
