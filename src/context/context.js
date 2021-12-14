import React from "react";

const ProductsStateContext = React.createContext();
const ProductsDispatchContext = React.createContext();

function productsReducer(state, action) {
    switch (action.type) {
        case "ADD_ALL_PRODUCTS": {
            // set - items && perPage && totalItems && perPage
            return { ...state, ...action.payload };
        }
        case "ADD_PRODUCT_TO_CART": {
            return { ...state, cart: [...state.cart, action.payload] };
        }
        case "SET_PROCESS": {
            return { ...state, process: action.payload };
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
            // return state ???
        }
    }
}

const ProductsProvider = function ({ children }) {
    const [state, dispatch] = React.useReducer(productsReducer, {
        items: [],
        process: "pending",
        cart: []
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
