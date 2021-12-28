import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import fetchProducts from "../thunks/getProducts";
import { IProduct } from "../../models/IProduct";

interface IProductsState {
    items: Array<IProduct>;
    cart: { [key: string]: Array<IProduct> };
    process: "loading" | "waiting" | "idle" | "error";
    totalPrice: number;
    totalCount: number;
    page: number;
    perPage: number;
    totalItems: number;
}
type FetchDataToState = Omit<
    IProductsState,
    "cart" | "process" | "totalPrice" | "totalCount"
>;

const initialState: IProductsState = {
    items: [],
    cart: {},
    process: "loading",
    totalPrice: 0,
    totalCount: 0,
    page: 0,
    perPage: 0,
    totalItems: 0
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProductToCart: (
            state: IProductsState,
            action: PayloadAction<IProduct>
        ) => {
            const __payload = action.payload ?? null;

            state.cart[__payload.id]
                ? state.cart[__payload.id].push(__payload)
                : (state.cart[__payload.id] = [__payload]);

            state.totalCount += 1;
            state.totalPrice += __payload.price;
        },
        removeProductFromCart: (
            state: IProductsState,
            action: PayloadAction<IProduct>
        ) => {
            const __payload = action.payload ?? null;
            if (state.cart[__payload.id].length === 1) {
                delete state.cart[__payload.id];
            } else {
                state.cart[__payload.id].pop();
            }
            state.totalCount -= 1;
            state.totalPrice -= __payload.price;
        },
        cleaningCart: (state: IProductsState) => {
            state.cart = {};
            state.totalPrice = 0;
            state.totalCount = 0;
        },
        cleaningCartItem: (
            state: IProductsState,
            action: PayloadAction<IProduct>
        ) => {
            const __payload = action.payload ?? null;

            state.totalPrice -= state.cart[__payload.id].reduce(
                (sum, item) => sum + item.price,
                0
            );
            state.totalCount -= state.cart[__payload.id].length;
            delete state.cart[__payload.id];
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state: IProductsState) => {
                state.process = "waiting";
            })
            .addCase(
                fetchProducts.fulfilled,
                (state: IProductsState, action: PayloadAction<FetchDataToState>) => {
                    state.process = "idle";
                    state.items = action.payload.items;
                    state.page = action.payload.page;
                    state.perPage = action.payload.perPage;
                    state.totalItems = action.payload.totalItems;
                }
            )
            .addCase(fetchProducts.rejected, (state: IProductsState) => {
                state.process = "error";
            });
    }
});

const { actions, reducer } = productsSlice;

export default reducer;
export const {
    addProductToCart,
    removeProductFromCart,
    cleaningCart,
    cleaningCartItem
} = actions;
