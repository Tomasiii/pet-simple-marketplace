import { RootState } from "../index";
import { createSelector } from "@reduxjs/toolkit";

export const sortSelector = (state: RootState) => {
    return state.sort;
};
export const originSelector = (state: RootState) => {
    return state.sort.origins;
};
export const maxPriceSelector = (state: RootState) => {
    return state.sort.maxPrice;
};
export const minPriceSelector = (state: RootState) => {
    return state.sort.minPrice;
};
export const perPageSelector = (state: RootState) => {
    return state.sort.perPage;
};
export const pageSelector = (state: RootState) => {
    return state.sort.page;
};
export const editableSelector = (state: RootState) => {
    return state.sort.editable;
};
export const totalItemsSelector = (state: RootState) => {
    return state.sort.totalItems;
};
export const omitTotalPriceSelector = createSelector(
    originSelector,
    maxPriceSelector,
    minPriceSelector,
    perPageSelector,
    pageSelector,
    editableSelector,
    (origins, maxPrice, minPrice, perPage, page, editable) => ({
        origins,
        maxPrice,
        minPrice,
        perPage,
        page,
        editable
    })
);
