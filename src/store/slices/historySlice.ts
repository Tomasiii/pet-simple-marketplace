import fetchHistory from "../thunks/getHistory";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IHistory } from "../../models/History";
import { FetchHistoryData } from "../../models/Thunks";

const initialState: IHistory = {
    history: null
};

const historySlice = createSlice({
    name: "history",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            fetchHistory.fulfilled,
            (state: IHistory, action: PayloadAction<FetchHistoryData>) => {
                state.history = action.payload.items;
            }
        );
    }
});

const { reducer } = historySlice;
export default reducer;
