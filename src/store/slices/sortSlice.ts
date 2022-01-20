import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchProducts } from "../thunks/getProducts";
import { ISort } from "../../models/Sort";

const initialState: ISort = {
    origins: "",
    perPage: 25,
    totalItems: 0,
    maxPrice: null,
    minPrice: 0,
    page: 1,
    editable: null
};

type A<T> = PayloadAction<T>;
const sortSlice = createSlice({
    name: "sort",
    initialState,
    reducers: {
        setOriginSort: (state: ISort, action: A<string>) => {
            state.origins = action.payload;
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
        },
        setEditable: (state: ISort, action: A<boolean | null>) => {
            state.editable = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state: ISort, action) => {
            state.page = action.payload.page;
            state.totalItems = action.payload.totalItems;
            state.perPage = action.payload.perPage;
        });
    }
});

const { actions, reducer } = sortSlice;
export default reducer;

export const {
    setOriginSort,
    setPerPageSort,
    setPageSort,
    setMaxPriceSort,
    setMinPriceSort,
    setEditable
} = actions;
