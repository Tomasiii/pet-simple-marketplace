import React from "react";
import produce from "immer";

const ProductsStateContext = React.createContext();
const ProductsDispatchContext = React.createContext();

function productsReducer(state, action) {
    //state = { cart: {'234k2l':[items]} , * , * }
    const __type = action.type;
    const __payload = action.payload ?? null;

    return produce(state, (draft) => {
        switch (__type) {
            case "SET_PROCESS": {
                draft.process = __payload;
                break;
            }
            case "ADD_ALL_PRODUCTS": {
                return { ...draft, ...__payload };
            }
            case "ADD_PRODUCT_TO_CART": {
                draft.cart[__payload.id]
                    ? draft.cart[__payload.id].push(__payload)
                    : (draft.cart[__payload.id] = [__payload]);

                draft.totalCount += 1;
                draft.totalPrice += __payload.price;
                break;
            }
            case "REMOVE_PRODUCT_FORM_CART": {
                if (draft.cart[__payload.id].length === 1) {
                    delete draft.cart[__payload.id];
                } else {
                    draft.cart[__payload.id].pop();
                }
                draft.totalCount -= 1;
                draft.totalPrice -= __payload.price;
                break;
            }
            case "CLEANING_CART": {
                draft.cart = {};
                draft.totalPrice = 0;
                draft.totalCount = 0;
                break;
            }
            case "CLEANING_CART_ITEM": {
                draft.totalPrice -= draft.cart[__payload.id].reduce(
                    (sum, item) => sum + item.price,
                    0
                );
                draft.totalCount -= draft.cart[__payload.id].length;
                delete draft.cart[__payload.id];
                break;
            }
            default: {
                throw new Error(`Unhandled action type: ${action.type}`);
                // return state ???
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
