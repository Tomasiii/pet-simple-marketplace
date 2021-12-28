import { FC, memo, useEffect } from "react";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import "./app.scss";
import Header from "../Header/Header";
import Spinner from "../Spinner/Spinner";
import { routes } from "../../routes";
import ROUTE_PATHS from "../../constants/routes";
import fetchProducts from "../../store/thunks/getProducts";
import { processSelector } from "../../store/selectors/productsSelector";
import { useAppDispatch, useAppSelector } from "../../hooks/hooksHelpers";

const App: FC = () => {
    const process = useAppSelector(processSelector);
    const dispatch = useAppDispatch();

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
