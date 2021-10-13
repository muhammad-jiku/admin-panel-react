import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Sidebar from './Components/Sidebar';
import Topbar from './Components/Topbar';
import HomePage from './Pages/JS/HomePage';
import NewProduct from './Pages/JS/NewProduct';
import NewUser from './Pages/JS/NewUser';
import Product from './Pages/JS/Product';
import ProductList from './Pages/JS/ProductList';
import User from './Pages/JS/User';
import UserList from './Pages/JS/UserList';

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <HomePage />
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
