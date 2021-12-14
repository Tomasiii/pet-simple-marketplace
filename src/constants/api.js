const base = "https://yalantis-react-school-api.yalantis.com/api/v1/";

const PATH_MAKER = {
    BASE: {
        _: base,
        PRODUCTS: {
            _: `${base}products/`,
            ID_FUN: (id) => `${base}products/${id}`
        }
    }
};
export { PATH_MAKER };
