import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../index";

export const productsSelector = (state: RootState) => {
    return state.products;
};
export const processSelector = (state: RootState) => {
    return state.products.process;
};
export const processReSelector = createSelector(
    processSelector,
    (process) => process
);

export const cartSelector = (state: RootState) => {
    return state.products.cart;
};
export const totalPriceSelector = (state: RootState) => {
    return state.products.totalPrice;
};
