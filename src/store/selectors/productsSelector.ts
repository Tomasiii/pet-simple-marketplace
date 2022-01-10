import { RootState } from "../index";

export const productsSelector = (state: RootState) => {
    return state.products;
};

export const totalPriceSelector = (state: RootState) => {
    return state.products.totalPrice;
};
