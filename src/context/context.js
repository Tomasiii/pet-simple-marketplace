import React from 'react'

const ProductsStateContext = React.createContext()
const ProductsDispatchContext = React.createContext()

function productsReducer(state, action) {
    switch (action.type) {
        case 'ADD_ALL_PRODUCTS': {
            return {items: action.payload}
        }
        case 'ADD_PRODUCT_TO_CART': {
            return {...state, cart: [...state.cart, action.payload]}
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
            // return state ???
        }
    }
}

function ProductsProvider({children}) {
    const [state, dispatch] = React.useReducer(productsReducer, {count: 0})
    return (
        <ProductsStateContext.Provider value={state}>
            <ProductsDispatchContext.Provider value={dispatch}>
                {children}
            </ProductsDispatchContext.Provider>
        </ProductsStateContext.Provider>)
}

function useProductsState() {
    const context = React.useContext(ProductsStateContext)
    if (context === undefined) {
        throw new Error('useProductsState must be used within a ProductsProvider')
    }
    return context
}

function useProductsDispatch() {
    const context = React.useContext(ProductsDispatchContext)
    if (context === undefined) {
        throw new Error('useProductsDispatch must be used within a ProductsProvider')
    }
    return context
}

export {ProductsProvider, useProductsState, useProductsDispatch}