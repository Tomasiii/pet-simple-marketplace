import { createReducer } from "@reduxjs/toolkit";
import { IHistory } from "../../models/History";
import { setHistory, setHistoryProcess } from "./actions";

const initialState: IHistory = {
    process: "loading",
    history: null
};

const history = createReducer(initialState, (builder) => {
    builder
        .addCase(setHistory, (state, action) => {
            state.history = action.payload;
        })
        .addCase(setHistoryProcess, (state, action) => {
            state.process = action.payload;
        });
});

export default history;
