import { cloneElement, FC, memo } from "react";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import "./app.scss";
import Header from "../Header/Header";
import Spinner from "../Spinner/Spinner";
import { routes } from "../../routes";
import ROUTE_PATHS from "../../config/constants/routes";
import { useGetAllProductsQuery } from "../../config/api/productsApi";

const App: FC = () => {
    const { status } = useGetAllProductsQuery("products");
    if (status === "pending") return <Spinner />;

    return (
        <Router>
            <div className="wrapper">
                <Header />
                <main>
                    <div>
                        <Switch>
                            {routes.map((route, i) =>
                                cloneElement(route, { key: i })
                            )}
                            <Redirect to={ROUTE_PATHS.HOME} />
                        </Switch>
                    </div>
                </main>
            </div>
        </Router>
    );
};

export default memo(App);
