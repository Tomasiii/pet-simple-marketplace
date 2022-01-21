import URL from "../../constants/url";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axios";

export const fetchHistory = createAsyncThunk("history/fetchHistory", async () => {
    try {
        const { data } = await axiosInstance.get(URL.getOrders);
        return data;
    } catch (e) {
        throw new Error("Something went wrong (request error)");
        // Link to Home ....
    }
});

export default fetchHistory;
