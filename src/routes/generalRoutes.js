import { Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Cart from "../pages/Cart/Cart";
import Product from "../pages/Product/Product";
import ROUT from "../constants/routes";

const generalRoutes = [
    <Route path={ROUT.getInitial} key={"home"} render={() => <Home />} exact />,
    <Route path={ROUT.getCart} key={"cart"} render={() => <Cart />} exact />,
    <Route
        path={ROUT.getProductId}
        key={"product"}
        render={() => <Product />}
        exact
    />
];

export default generalRoutes;
