// import logo from './logo.svg';
import React from "react";
import Nav from '../Routers/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "../Components/Home/Home";
import Cart from "../Components/Cart/Cart";
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Tancong from "../Components/Menu__Product/Tancong/Tancong";
import Phongthu from "../Components/Menu__Product/Phongthu/Phongthu";
import Phepthuat from "../Components/Menu__Product/Phepthuat/Phepthuat";
import Dirung from "../Components/Menu__Product/Dirung/Dirung";
import Tocchay from "../Components/Menu__Product/Tocchay/Tocchay";
import Phutro from "../Components/Menu__Product/Phutro/Phutro";
import ProductID from "../Components/ProductID/ProductID";
import KenhNguoiBan from "../Components/KenhNguoiBan/KenhNguoiBan";
import NotPage from "../Components/NotPage/NotPage";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/product/:id" exact>
            <ProductID />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/kenhNguoiBan">
            <KenhNguoiBan />
          </Route>
          <Route path="/tanCong">
            <Tancong />
          </Route>
          <Route path="/phepThuat">
            <Phepthuat />
          </Route>
          <Route path="/phongThu">
            <Phongthu />
          </Route>
          <Route path="/diRung">
            <Dirung />
          </Route>
          <Route path="/tocChay">
            <Tocchay />
          </Route>
          <Route path="/phuTro">
            <Phutro />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NotPage />
          </Route> 
        </Switch>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Router>
  );
}

export default App;
