import { memo, useEffect } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import "./app.scss";
import { useProductsDispatch, useProductsState } from "../../context/context";
import Home from "../../pages/Home/Home";
import Cart from "../../pages/Cart/Cart";
import Product from "../../pages/Product/Product";
import Header from "../Header/Header";
import Spinner from "../Spinner/Spinner";
import { setAllProducts } from "../../api/apiRequests";

const App = () => {
    const { process } = useProductsState();
    const dispatch = useProductsDispatch();

    useEffect(() => {
        setAllProducts(dispatch);
    }, [dispatch]);

    if (process === "pending") return <Spinner />;

    return (
        <Router>
            <div className="wrapper">
                <Header />
                <main>
                    <div>
                        <Switch componentClass="div">
                            <Route path="/" component={Home} exact />
                            <Route path="/cart" component={Cart} exact />
                            <Route path="/product/:id" component={Product} exact />
                            <Redirect to="/" />
                        </Switch>
                    </div>
                </main>
            </div>
        </Router>
    );
};

export default memo(App);
