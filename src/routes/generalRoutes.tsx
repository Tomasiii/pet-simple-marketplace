import { lazy, ReactElement } from "react";
import { Route } from "react-router-dom";
const Home = lazy(() => import("../pages/Home/Home"));
const Cart = lazy(() => import("../pages/Cart/Cart"));
const Product = lazy(() => import("../pages/Product/Product"));
const CreatedProducts = lazy(
    () => import("../pages/CreatedProducts/CreatedProducts")
);
const CartPurchaseHistory = lazy(
    () => import("../pages/PurchaseHistory/PurchaseHistory")
);
import ROUTE_PATHS from "../constants/routes";

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
    />,
    <Route
        path={ROUTE_PATHS.PURCHASE_HISTORY}
        key={ROUTE_PATHS.PURCHASE_HISTORY}
        render={() => <CartPurchaseHistory />}
        exact
    />
];

export default generalRoutes;
