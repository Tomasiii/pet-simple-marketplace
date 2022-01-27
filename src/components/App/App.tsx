import { FC, memo, Suspense } from "react";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import "./app.scss";
import Header from "../Header/Header";
import { routes } from "../../routes";
import ROUTE_PATHS from "../../constants/routes";
import { Provider } from "react-redux";
import { store } from "../../store";
import Spinner from "../Spinner/Spinner";
import Request from "../Request/Request";

const App: FC = () => {
    return (
        <Provider store={store}>
            <Router>
                <div className="wrapper">
                    <Request />
                    <Header />
                    <main>
                        <div>
                            <Suspense fallback={<Spinner />}>
                                <Switch>
                                    {routes}
                                    <Redirect to={ROUTE_PATHS.HOME} />
                                </Switch>
                            </Suspense>
                        </div>
                    </main>
                </div>
            </Router>
        </Provider>
    );
};

export default memo(App);
