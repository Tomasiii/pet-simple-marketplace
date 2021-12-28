import { createSlice, createEntityAdapter, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../models/IProduct";
import fetchProducts from "../thunks/getProducts";

const productsAdapter = createEntityAdapter<IProduct>();

const initialState = productsAdapter.getInitialState({
    cart: {} as { [key: string]: Array<IProduct> },
    process: "loading" as "loading" | "waiting" | "idle" | "error",
    totalPrice: 0,
    totalCount: 0,
    page: 0,
    perPage: 0,
    totalItems: 0
});

export type IProductsState = typeof initialState;

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
            .addCase(fetchProducts.fulfilled, (state: IProductsState, action) => {
                state.process = "idle";
                productsAdapter.setAll(state, action.payload.items);
                productsAdapter.setOne(state, action.payload.page);
                productsAdapter.setOne(state, action.payload.perPage);
                productsAdapter.setOne(state, action.payload.totalItems);
            })
            .addCase(fetchProducts.rejected, (state: IProductsState) => {
                state.process = "error";
            });
    }
});

export const { selectIds, selectAll, selectTotal, selectById } =
    productsAdapter.getSelectors(({ products }) => products);

const { actions, reducer } = productsSlice;

export default reducer;
export const {
    addProductToCart,
    removeProductFromCart,
    cleaningCart,
    cleaningCartItem
} = actions;
