import "./App.css";

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
import SingleItem from "./components/itemList/SingleItem";
import Home from "./components/Home";
import LoginReg from "./components/LoginReg/LoginReg";
import Cart from "./components/cart/Cart";
import Add from "./components/Admin/Add";
import Edit from "./components/Admin/Edit";
import { useGlobalContext } from "./Context";

function App() {
  const { loggedUser } = useGlobalContext();
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/login" element={<LoginReg />}></Route>
        <Route exact path="/products" element={<Main></Main>}></Route>
        <Route exact path="/products/:id" element={<SingleItem />}></Route>
        <Route exact path="/cart" element={<Cart />}></Route>
        <Route exact path="/add" element={<Add />}></Route>
        <Route exact path="/edit/:id" element={<Edit />}></Route>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
