import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

const AppContext = React.createContext();

const Wrapper = ({ children }) => {
  const [item, setItem] = useState({});
  const [items, setItems] = useState([]);
  const [formError, setFormError] = useState({});
  const [triggerFetch, setTriggerFetch] = useState(false);
  const [loggedUser, setLoggedUser] = useState({});
  const [currentUserCart, setCurrentUserCart] = useState([]);

  // ! get fetch

  const fetch = () => {
    axios
      .get("http://localhost:8000/api/items")
      .then((res) => {
        setItems(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetch();
  }, [triggerFetch]);

  // ! getOne fetch

  const fetchOne = (id) => {
    axios
      .get(`http://localhost:8000/api/items/${id}`)
      .then((res) => {
        setItem(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  // ! create

  const fetchAdd = (input, navigate) => {
    axios
      .post("http://localhost:8000/api/items/new", input)
      .then((response) => {
        console.log("response after submitting", response);
        if (response.data.errors) {
          setFormError(response.data.errors);
          console.log(formError);
        } else {
          setTriggerFetch(!triggerFetch);
          setFormError({});
          navigate("/");
          setItem({});
        }
      })
      .catch((err) => console.log(err));
  };

  // ! delete fetch

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/api/items/${id}/delete`)
      .then((res) => {
        console.log(res);
        setTriggerFetch(!triggerFetch);
      })
      .catch((err) => console.log(err));
  };
  //! Edit fetch

  const handleEdit = (id, input, navigate) => {
    axios
      .put(`http://localhost:8000/api/items/${id}/update`, input)
      .then((response) => {
        console.log("response after submitting", response);
        if (response.data.errors) {
          setFormError(response.data.errors);
          console.log(formError);
        } else {
          setTriggerFetch(!triggerFetch);
          setFormError({});
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //#all of below is user api calls

  //! get logged user

  const getLoggedUser = (navigate) => {
    axios
      .get("http://localhost:8000/api/users/getloggedinuser", {
        withCredentials: true,
      })
      .then((res) => {
        console.log("res when getting logged in user", res);

        //! this means user is logged in and can access the page
        if (res.data.results) {
          setLoggedUser(res.data.results);
        } else {
          //! this means user is not logged in and cant access the page/ will be redirected
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log("error when getting logged in user", err);
      });
  };

  //#all of below is cart api calls

  //!add to cart

  const addToCart = (cartItem, navigate) => {
    axios
      .post("http://localhost:8000/api/cart/items/add", cartItem)
      .then((response) => {
        console.log("response after adding to cart", response);
        if (response.data.errors) {
          setFormError(response.data.errors);
        } else {
          navigate("/products");
        }
      })
      .catch((err) => console.log(err));
  };

  //!get items in the current user cart

  const getUserCart = (user) => {
    axios
      .get(`http://localhost:8000/api/cart/items/${user}`)
      .then((response) => {
        if (response) {
          setCurrentUserCart(response.data.results.cartItems);
        } else {
          setCurrentUserCart([]);
        }
      })
      .catch((err) => console.log(err));
  };

  //! reomove one cart item

  const removeOneCartItem = (itemToRemove) => {
    console.log("hellow");
    axios
      .put(
        `http://localhost:8000/api/cart/items/removeOneCartItem`,
        itemToRemove
      )
      .then((response) => {
        console.log("response after removing the cart item", response);
        if (response.data.errors) {
          setFormError(response.data.errors);
        }
        getUserCart(itemToRemove.user);
      })
      .catch((err) => console.log(err));
  };

  // ! increse / decrese item quantity by one

  const changeByOne = (itemToInc) => {
    axios
      .put(`http://localhost:8000/api/cart/items/changeCountByOne`, itemToInc)
      .then((response) => {
        console.log("response after increasing the item quatity", response);
        if (response.data.errors) {
          setFormError(response.data.errors);
        }
        getUserCart(itemToInc.userId);
      })
      .catch((err) => console.log(err));
  };

  return (
    <AppContext.Provider
      value={{
        item,
        items,
        formError,
        loggedUser,
        currentUserCart,
        handleDelete,
        handleEdit,
        fetchOne,
        fetchAdd,
        getLoggedUser,
        addToCart,
        getUserCart,
        removeOneCartItem,
        changeByOne,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, Wrapper };
