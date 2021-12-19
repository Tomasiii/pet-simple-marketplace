import { memo, useEffect } from "react";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import "./app.scss";
import { useProductsDispatch, useProductsState } from "../../context/context";
import Header from "../Header/Header";
import Spinner from "../Spinner/Spinner";
import { setAllProducts } from "../../api/apiRequests";
import { routes } from "../../routes";
import ROUT from "../../constants/routes";

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
                        <Switch>
                            {routes}
                            <Redirect to={ROUT.getInitial} />
                        </Switch>
                    </div>
                </main>
            </div>
        </Router>
    );
};

export default memo(App);
