import types from "../constants/dispatchTypes";
import { getProducts } from "../services/productsService";

async function setAllProducts(dispatch) {
    try {
        dispatch({ type: types.SET_PROCESS, payload: "loading" });
        const response = await getProducts();
        dispatch({ type: types.ADD_ALL_PRODUCTS, payload: response.data });
        dispatch({ type: types.SET_PROCESS, payload: "confirmed" });
    } catch (error) {
        dispatch({ type: types.SET_PROCESS, payload: "error" });
        console.log("Error:", error);
    }
}

export { setAllProducts };
