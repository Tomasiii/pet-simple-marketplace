import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISort } from "../../config/types/sort";

const initialState: ISort = {
    origin: "",
    perPage: 25,
    totalItems: 0,
    maxPrice: 0,
    minPrice: 0,
    page: 1
};

type A<T> = PayloadAction<T>;
const sortSlice = createSlice({
    name: "sort",
    initialState,
    reducers: {
        setOriginSort: (state: ISort, action: A<string>) => {
            state.origin = action.payload;
        },
        setPerPageSort: (state: ISort, action: A<number>) => {
            state.perPage = action.payload;
        },
        setPageSort: (state: ISort, action: A<number>) => {
            state.page = action.payload;
        },
        setMaxPriceSort: (state: ISort, action: A<number>) => {
            state.maxPrice = action.payload;
        },
        setMinPriceSort: (state: ISort, action: A<number>) => {
            state.minPrice = action.payload;
        }
    }
});

const { actions, reducer } = sortSlice;
export default reducer;

export const {
    setOriginSort,
    setPerPageSort,
    setPageSort,
    setMaxPriceSort,
    setMinPriceSort
} = actions;
