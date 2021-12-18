import axios from "axios";
const instance = axios.create({
    baseURL: "https://yalantis-react-school-api.yalantis.com/api/v1/"
});

async function setAllProducts(dispatch) {
    dispatch({ type: "SET_PROCESS", payload: "loading" });

    instance
        .get("products/")
        .then((response) => {
            dispatch({ type: "ADD_ALL_PRODUCTS", payload: response.data });
            dispatch({ type: "SET_PROCESS", payload: "confirmed" });
        })
        .catch((error) => {
            dispatch({ type: "SET_PROCESS", payload: "error" });
            console.log("Error:", error);
        });
}

export { setAllProducts };
