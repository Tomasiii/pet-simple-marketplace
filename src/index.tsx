import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App/App";
import { store } from "./store";

const rootElement = document.getElementById("root");
render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);
