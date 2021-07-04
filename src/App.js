import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import './App.css'
import Home from "./components/pages/Home/Home";
import UserList from "./components/pages/UserList/UserList";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import User from "./components/pages/User/User";
import NewUser from "./components/pages/NewUser/NewUser";
import ProductList from "./components/pages/ProductList/ProductList";
import Product from "./components/pages/product/Product";
import NewProduct from "./components/pages/NewProduct/NewProduct";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newProduct">
            <NewProduct />
          </Route>
        </Switch>
      </div>

    </Router>
  );
}

export default App;
