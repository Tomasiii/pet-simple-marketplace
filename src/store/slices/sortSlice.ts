import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchProducts } from "../thunks/getProducts";
import { ISort } from "../../models/Sort";

const initialState: ISort = {
    origins: "",
    perPage: null,
    totalItems: null,
    maxPrice: null,
    minPrice: 0,
    page: null,
    editable: null
};

type A<T> = PayloadAction<T>;
const sortSlice = createSlice({
    name: "sort",
    initialState,
    reducers: {
        setSort: (state: ISort, action: A<Partial<Omit<ISort, "totalItems">>>) => {
            const p = action.payload;
            if (p.perPage) state.perPage = p.perPage;
            if (p.minPrice) state.minPrice = p.minPrice;
            if (p.page) state.page = p.page;
            if (p.origins !== undefined) state.origins = p.origins;
            if (p.maxPrice !== undefined) state.maxPrice = p.maxPrice;
            if (p.editable !== undefined) {
                state.editable = p.editable === true ? true : null;
            }
        },
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
    setSort,
    setOriginSort,
    setPerPageSort,
    setPageSort,
    setMaxPriceSort,
    setMinPriceSort,
    setEditable
} = actions;
