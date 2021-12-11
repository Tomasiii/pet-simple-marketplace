import {lazy} from "react";
import { Route } from 'react-router-dom';
import './app.scss';
import '../../../node_modules/normalize.css/normalize.css';

const Home = lazy(() => import("../../pages/Home/Home"));
const Header = lazy(() => import("../Header/Header"));

function App() {
  return (
      <>
          <Header />
          <div className="content">
              <Route path="/" component={Home} exact />
              {/*<Route path="/cart" component={Cart} exact />*/}
          </div>
      </>
  );
}

export default App;
