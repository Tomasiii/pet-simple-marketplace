import { ReactElement } from "react";
import { Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Cart from "../pages/Cart/Cart";
import Product from "../pages/Product/Product";
import ROUTE_PATHS from "../constants/routes";

const generalRoutes: ReactElement[] = [
    <Route path={ROUTE_PATHS.HOME} key={"home"} render={() => <Home />} exact />,
    <Route path={ROUTE_PATHS.CART} key={"cart"} render={() => <Cart />} exact />,
    <Route
        path={ROUTE_PATHS.PRODUCT_DETAILS}
        key={"product"}
        render={() => <Product />}
        exact
    />
];

export default generalRoutes;
