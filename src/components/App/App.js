import { memo, useEffect } from "react";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import "./app.scss";
import Header from "../Header/Header";
import Spinner from "../Spinner/Spinner";
import { routes } from "../../routes";
import ROUTE_PATHS from "../../constants/routes";
import { useDispatch, useSelector } from "react-redux";
import fetchProducts from "../../store/thunks/getProducts";
import productsSelector from "../../store/selectors/productsSelector";

const App = () => {
    const { process } = useSelector(productsSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (process === "loading") return <Spinner />;

    return (
        <Router>
            <div className="wrapper">
                <Header />
                <main>
                    <div>
                        <Switch>
                            {routes}
                            <Redirect to={ROUTE_PATHS.HOME} />
                        </Switch>
                    </div>
                </main>
            </div>
        </Router>
    );
};

export default memo(App);
