import { RootState } from "../index";

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

export const totalItemsSelector = (state: RootState) => {
    return state.sort.totalItems;
};

export const perPageSelector = (state: RootState) => {
    return state.sort.perPage;
};
export const pageSelector = (state: RootState) => {
    return state.sort.page;
};
