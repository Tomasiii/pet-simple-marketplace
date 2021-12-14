import { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./app.scss";
import { setAllProducrs } from "../../api/apiRequests";
import { useProductsDispatch, useProductsState } from "../../context/context";
import Home from "../../pages/Home/Home";
import Cart from "../../pages/Cart/Cart";
import Header from "../Header/Header";
import Spinner from "../Spinner/Spinner";

const App = () => {
    const dispatch = useProductsDispatch();
    const { process } = useProductsState();

    useEffect(() => {
        setAllProducrs(dispatch);
    }, [dispatch]);

    if (process === "pending") return <Spinner />;

    return (
        <div className="wrapper">
            <Header />
            <main>
                <div className="content">
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/cart" component={Cart} exact />
                        <Redirect to="/" />
                    </Switch>
                </div>
            </main>
        </div>
    );
};

export default App;
