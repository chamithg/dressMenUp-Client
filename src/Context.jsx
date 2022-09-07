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
  const [reviews, setReviews] = useState({});
  const [allreviews, setAllReviews] = useState([]);

  useEffect(() => {
    setAllReviews(reviews.reviews);
  }, [reviews]);

  // ! get fetch
  //!-----------------------------------------------Item-------------------------------

  const fetch = () => {
    axios
      .get("http://localhost:8000/api/items")
      .then((res) => {
        setItems(res.data.results);
      })
      .catch((err) => console.log("err getting all item ", err));
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
      .catch((err) => console.log("err getting one item ", err));
  };

  // ! create

  const fetchAdd = (input, navigate) => {
    axios
      .post("http://localhost:8000/api/items/new", input)
      .then((response) => {
        if (response.data.errors) {
          setFormError(response.data.errors);
          console.log("error add new item" + formError);
        } else {
          setTriggerFetch(!triggerFetch);
          setFormError({});
          navigate("/");
          setItem({});
        }
      })
      .catch((err) => console.log("error add new item", err));
  };

  // ! delete fetch

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/api/items/${id}/delete`)
      .then((res) => {
        setTriggerFetch(!triggerFetch);
      })
      .catch((err) => console.log("error deleting item", err));
  };
  //! Edit fetch

  const handleEdit = (id, input, navigate) => {
    axios
      .put(`http://localhost:8000/api/items/${id}/update`, input)
      .then((response) => {
        if (response.data.errors) {
          setFormError(response.data.errors);
          console.log("error editing item", formError);
        } else {
          setTriggerFetch(!triggerFetch);
          setFormError({});
          navigate("/");
        }
      })
      .catch((err) => {
        console.log("error editing item", err);
      });
  };

  //!-----------------------------------------------User-------------------------------

  //! get logged user

  const getLoggedUser = (navigate) => {
    axios
      .get("http://localhost:8000/api/users/getloggedinuser", {
        withCredentials: true,
      })
      .then((res) => {
        //! this means user is logged in and can access the page
        if (res.data.results) {
          setLoggedUser(res.data.results);
        } else {
          setFormError(res.data.errors);
          console.log("error getting logged in user", formError);
          //! this means user is not logged in and cant access the page/ will be redirected
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log("error when getting logged in user", err);
      });
  };

  //!-----------------------------------------------Cart-------------------------------

  //!add to cart

  const addToCart = (cartItem, navigate) => {
    axios
      .post("http://localhost:8000/api/cart/items/add", cartItem)
      .then((response) => {
        if (response.data.errors) {
          setFormError(response.data.errors);
          console.log("error adding item to cart", formError);
        } else {
          navigate("/products");
        }
      })
      .catch((err) => console.log("error adding item to cart", err));
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
          setFormError(response.data.errors);
          console.log("error fetching current cart", formError);
        }
      })
      .catch((err) => console.log("error fetching current cart", err));
  };

  //! reomove one cart item

  const removeOneCartItem = (itemToRemove) => {
    axios
      .put(
        `http://localhost:8000/api/cart/items/removeOneCartItem`,
        itemToRemove
      )
      .then((response) => {
        if (response.data.errors) {
          setFormError(response.data.errors);
          console.log("error remove item from cart", formError);
        }
        getUserCart(itemToRemove.user);
      })
      .catch((err) => console.log("error remove item from cart", err));
  };

  // ! increse / decrease item quantity by one

  const changeByOne = (itemToInc) => {
    axios
      .put(`http://localhost:8000/api/cart/items/changeCountByOne`, itemToInc)
      .then((response) => {
        if (response.data.errors) {
          setFormError(response.data.errors);
          console.log("error change cart item quantity", formError);
        }
        getUserCart(itemToInc.userId);
      })
      .catch((err) => console.log("error change cart item quantity", err));
  };

  //!-----------------------------------------------Reviews-------------------------------

  //!add to Reviews

  const addToReviews = (newRating) => {
    axios
      .post("http://localhost:8000/api/ratings/new", newRating)
      .then((response) => {
        if (response.data.errors) {
          setFormError(response.data.errors);
          setFormError(response.data.errors);
          console.log("error adding review", formError);
        }
      })
      .catch((err) => console.log("error adding review", err));
  };

  const getReviews = (item_id) => {
    axios
      .get(`http://localhost:8000/api/ratings/${item_id}`)
      .then((res) => {
        if (res.data.results) {
          setReviews(res.data.results);
          console.log("reviews are", reviews);
        }
      })
      .catch((err) => console.log(err));
  };

  //!get  Reviews

  return (
    <AppContext.Provider
      value={{
        item,
        items,
        formError,
        loggedUser,
        currentUserCart,
        reviews,
        allreviews,
        handleDelete,
        handleEdit,
        fetchOne,
        fetchAdd,
        getLoggedUser,
        addToCart,
        getUserCart,
        removeOneCartItem,
        changeByOne,
        addToReviews,
        getReviews,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, Wrapper };
