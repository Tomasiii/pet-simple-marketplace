import URL from "../../constants/url";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axios";
import { IHistoryBodyArr } from "../../models/History";
import { AxiosResponse } from "axios";
//
// export const fetchHistory = createAsyncThunk("history/fetchHistory", async () => {
//     try {
//         const { data } = await axiosInstance.get(URL.getOrders);
//         return data;
//     } catch (e) {
//         throw new Error("Something went wrong (request error)");
//     }
// });

export const fetchHistorySaga = async () => {
    try {
        return await axiosInstance.get<AxiosResponse<{ items: IHistoryBodyArr }>>(
            URL.getOrders
        );
    } catch (e) {
        throw new Error("Something went wrong (request error)");
    }
};

// export default fetchHistory;
