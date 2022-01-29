import { createAction, createReducer, PayloadActionCreator } from "@reduxjs/toolkit";
import { IHistory, IHistoryBodyArr } from "../../models/History";

const initialState: IHistory = {
    history: null
};
export const setHistory: PayloadActionCreator<IHistoryBodyArr, "FETCH_HISTORY"> =
    createAction("FETCH_HISTORY");

const history = createReducer(initialState, (builder) => {
    builder.addCase(setHistory, (state, action) => {
        state.history = action.payload;
    });
});

export default history;
