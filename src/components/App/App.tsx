import { FC, memo } from "react";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import "./app.scss";
import Header from "../Header/Header";
import { routes } from "../../routes";
import ROUTE_PATHS from "../../constants/routes";
import { Provider } from "react-redux";
import { store } from "../../store";

const App: FC = () => {
    return (
        <Provider store={store}>
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
        </Provider>
    );
};

export default memo(App);
