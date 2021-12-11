import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {ProductsProvider} from "./context/context";
import Spinner from "./components/Spinner/Spinner";

const App = lazy(() => import('./components/App/App'));

ReactDOM.render(
    <Router>
        <ProductsProvider>
            <Suspense fallback={<Spinner/>}>
                <App/>
            </Suspense>
        </ProductsProvider>
    </Router>,
    document.getElementById('root')
);

