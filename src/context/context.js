import React from "react";
import produce from "immer";
import types from "../constants/dispatchTypes";

const ProductsStateContext = React.createContext();
const ProductsDispatchContext = React.createContext();

function productsReducer(state, action) {
    const __type = action.type;
    const __payload = action.payload ?? null;

    return produce(state, (draft) => {
        switch (__type) {
            case types.SET_PROCESS: {
                draft.process = __payload;
                break;
            }
            case types.ADD_ALL_PRODUCTS: {
                return { ...draft, ...__payload };
            }
            case types.ADD_PRODUCT_TO_CART: {
                draft.cart[__payload.id]
                    ? draft.cart[__payload.id].push(__payload)
                    : (draft.cart[__payload.id] = [__payload]);

                draft.totalCount += 1;
                draft.totalPrice += __payload.price;
                break;
            }
            case types.REMOVE_PRODUCT_FORM_CART: {
                if (draft.cart[__payload.id].length === 1) {
                    delete draft.cart[__payload.id];
                } else {
                    draft.cart[__payload.id].pop();
                }
                draft.totalCount -= 1;
                draft.totalPrice -= __payload.price;
                break;
            }
            case types.CLEANING_CART: {
                draft.cart = {};
                draft.totalPrice = 0;
                draft.totalCount = 0;
                break;
            }
            case types.CLEANING_CART_ITEM: {
                draft.totalPrice -= draft.cart[__payload.id].reduce(
                    (sum, item) => sum + item.price,
                    0
                );
                draft.totalCount -= draft.cart[__payload.id].length;
                delete draft.cart[__payload.id];
                break;
            }
            default: {
                return state;
            }
        }
    });
}

const ProductsProvider = function ({ children }) {
    const [state, dispatch] = React.useReducer(productsReducer, {
        items: [],
        cart: {},
        process: "pending",
        totalPrice: 0,
        totalCount: 0
    });
    return (
        <ProductsStateContext.Provider value={state}>
            <ProductsDispatchContext.Provider value={dispatch}>
                {children}
            </ProductsDispatchContext.Provider>
        </ProductsStateContext.Provider>
    );
};

function useProductsState() {
    const context = React.useContext(ProductsStateContext);
    if (context === undefined) {
        throw new Error("useProductsState must be used within a ProductsProvider");
    }
    return context;
}

function useProductsDispatch() {
    const context = React.useContext(ProductsDispatchContext);
    if (context === undefined) {
        throw new Error(
            "useProductsDispatch must be used within a ProductsProvider"
        );
    }
    return context;
}

export { ProductsProvider, useProductsState, useProductsDispatch };
