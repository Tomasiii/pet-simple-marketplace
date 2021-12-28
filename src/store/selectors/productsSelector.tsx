import { RootState } from "../index";

const productsSelector = (state: RootState) => {
    return state.products;
};
export default productsSelector;
