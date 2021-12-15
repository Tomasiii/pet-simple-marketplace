import React from "react";
import { render } from "react-dom";
import { ProductsProvider } from "./context/context";
import App from "./components/App/App";

render(
    <ProductsProvider>
        <App />
    </ProductsProvider>,
    document.getElementById("root")
);
