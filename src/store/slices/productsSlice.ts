import { createSlice, createEntityAdapter, PayloadAction } from "@reduxjs/toolkit";
import { EntityBase, IProduct } from "../../models/Product";
import fetchProducts from "../thunks/getProducts";
import { RootState } from "../index";
import { FetchProductData } from "../../models/Thunks";

const productsAdapter = createEntityAdapter<IProduct>();

const initialState = productsAdapter.getInitialState({
    cart: { ids: [], entities: {} } as EntityBase,
    process: "loading" as "loading" | "waiting" | "idle" | "error",
    totalPrice: 0,
    totalCount: 0
});

export type IProductsState = typeof initialState;
type A<T> = PayloadAction<T>;

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProductToCart: (state: IProductsState, action: A<IProduct>) => {
            const _payload = action.payload;
            productsAdapter.setOne(state.cart, {
                ..._payload,
                count: state.cart.entities[_payload.id]
                    ? state.cart.entities[_payload.id].count + 1
                    : 1
            });
            state.totalCount += 1;
            state.totalPrice += _payload.price;
        },
        removeProductFromCart: (state: IProductsState, action: A<IProduct>) => {
            const _payload = action.payload;
            if (_payload.count === 1) {
                productsAdapter.removeOne(state.cart, _payload.id);
            } else {
                productsAdapter.setOne(state.cart, {
                    ..._payload,
                    count: _payload.count - 1
                });
            }
            state.totalCount -= 1;
            state.totalPrice -= _payload.price;
        },
        cleaningCart: (state: IProductsState) => {
            productsAdapter.removeAll(state.cart);
            state.totalPrice = 0;
            state.totalCount = 0;
        },
        cleaningCartItem: (state: IProductsState, action: A<IProduct>) => {
            const _payload = action.payload;
            state.totalPrice -= _payload.count * _payload.price;
            state.totalCount -= _payload.count;
            productsAdapter.removeOne(state.cart, _payload.id);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state: IProductsState) => {
                state.process = "waiting";
            })
            .addCase(
                fetchProducts.fulfilled,
                (
                    state: IProductsState,
                    action: A<Pick<FetchProductData, "items">>
                ) => {
                    state.process = "idle";
                    productsAdapter.setAll(state, action.payload.items);
                }
            )
            .addCase(fetchProducts.rejected, (state: IProductsState) => {
                state.process = "error";
            });
    }
});

export const { selectIds, selectAll, selectTotal, selectById } =
    productsAdapter.getSelectors<RootState>(({ products }) => products);

const { actions, reducer } = productsSlice;

export default reducer;
export const {
    addProductToCart,
    removeProductFromCart,
    cleaningCart,
    cleaningCartItem
} = actions;
