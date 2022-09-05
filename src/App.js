import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
import SingleItem from "./components/itemList/SingleItem";
import Home from "./components/Home";
import LoginReg from "./components/LoginReg/LoginReg";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/products" element={<Main></Main>}></Route>
        <Route exact path="/products/:id" element={<SingleItem />}></Route>
        <Route exact path="/cart" element={<Cart />}></Route>
        <Route exact path="/login" element={<LoginReg />}></Route>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
