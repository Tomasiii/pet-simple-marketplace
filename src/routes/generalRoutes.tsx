import { ReactElement } from "react";
import { Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Cart from "../pages/Cart/Cart";
import Product from "../pages/Product/Product";
import ROUTE_PATHS from "../constants/routes";
import CreatedProducts from "../pages/CreatedProducts/CreatedProducts";

const generalRoutes: ReactElement[] = [
    <Route
        path={ROUTE_PATHS.HOME}
        key={ROUTE_PATHS.HOME}
        render={() => <Home />}
        exact
    />,
    <Route
        path={ROUTE_PATHS.CART}
        key={ROUTE_PATHS.CART}
        render={() => <Cart />}
        exact
    />,
    <Route
        path={ROUTE_PATHS.PRODUCT_DETAILS}
        key={ROUTE_PATHS.PRODUCT_DETAILS}
        render={() => <Product />}
        exact
    />,
    <Route
        path={ROUTE_PATHS.CREATED_PRODUCTS}
        key={ROUTE_PATHS.CREATED_PRODUCTS}
        render={() => <CreatedProducts />}
        exact
    />
];

export default generalRoutes;
