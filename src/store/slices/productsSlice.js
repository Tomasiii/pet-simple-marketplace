import { createSlice } from "@reduxjs/toolkit";
import fetchProducts from "../thunks/getProducts";

const initialState = {
    items: [],
    cart: {},
    process: "loading",
    totalPrice: 0,
    totalCount: 0
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProductToCart: (state, action) => {
            const __payload = action.payload ?? null;

            state.cart[__payload.id]
                ? state.cart[__payload.id].push(__payload)
                : (state.cart[__payload.id] = [__payload]);

            state.totalCount += 1;
            state.totalPrice += __payload.price;
        },
        removeProductFromCart: (state, action) => {
            const __payload = action.payload ?? null;
            if (state.cart[__payload.id].length === 1) {
                delete state.cart[__payload.id];
            } else {
                state.cart[__payload.id].pop();
            }
            state.totalCount -= 1;
            state.totalPrice -= __payload.price;
        },
        cleaningCart: (state, action) => {
            const __payload = action.payload ?? null;
            state.cart = {};
            state.totalPrice = 0;
            state.totalCount = 0;
        },
        cleaningCartItem: (state, action) => {
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
            .addCase(fetchProducts.pending, (state) => {
                state.process = "waiting";
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.process = "idle";
                state.items = action.payload.items;
                state.page = action.payload.page;
                state.perPage = action.payload.perPage;
                state.totalItems = action.payload.totalItems;
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.process = "error";
            })
            .addDefaultCase(() => {});
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
