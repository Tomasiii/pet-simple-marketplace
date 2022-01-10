import { Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Cart from "../pages/Cart/Cart";
import Product from "../pages/Product/Product";
import ROUTE_PATHS from "../config/constants/routes";

const generalRoutes = [
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
    />
];

export default generalRoutes;
