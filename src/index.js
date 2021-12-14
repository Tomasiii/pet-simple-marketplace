import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductsProvider } from "./context/context";
import App from "./components/App/App";

render(
    <Router>
        <ProductsProvider>
            <App />
        </ProductsProvider>
    </Router>,
    document.getElementById("root")
);
