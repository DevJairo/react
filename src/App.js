import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Index from "./layout/Index";
import Menu from "./layout/Menu";
import Login from './login/Login';
import Dashboard from "./pages/dashboard/Dashboard";
import Invoice from "./pages/invoice/Invoice";
import Category from "./pages/category/Category";
import Customer from "./pages/customer/Customer";
import Product from "./pages/product/Product";

import PrivateRoute from './utils/PrivateRoute';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

   return (
    <Router>
        <Switch>
          <PrivateRoute path="/dashboard">
            <Index>
              <Dashboard title="Dashboard"/>
              <ToastContainer/>
            </Index>
          </PrivateRoute>
          <PrivateRoute path="/invoice">
            <Index>
              <Invoice title="Facturas"/>
              <ToastContainer/>
            </Index>
          </PrivateRoute>
          <PrivateRoute path="/category">
            <Index>
              <Category title="Categorias"/>
              <ToastContainer/>
            </Index>
          </PrivateRoute>
          <PrivateRoute path="/product">
            <Index>
              <Product title="Productos"/>
              <ToastContainer/>
            </Index>
          </PrivateRoute>
          <PrivateRoute path="/customer">
            <Index>
              <Customer title="Clientes"/>
              <ToastContainer/>
            </Index>
          </PrivateRoute>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      {/* </div> */}
    </Router>
  );
}

export default App;
