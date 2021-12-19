import { Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Cart from "../pages/Cart/Cart";
import Product from "../pages/Product/Product";
import URL from "../constants/url";

const generalRoutes = [
    <Route path={URL.getInitialRout} key={"home"} render={() => <Home />} exact />,
    <Route path={URL.getCartRout} key={"cart"} render={() => <Cart />} exact />,
    <Route
        path={URL.getProductIdRout}
        key={"product"}
        render={() => <Product />}
        exact
    />
];

export default generalRoutes;
