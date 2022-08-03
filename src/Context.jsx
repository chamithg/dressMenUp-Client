import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

const AppContext = React.createContext();

const Wrapper = ({ children }) => {
  const [item, setItem] = useState({});
  const [items, setItems] = useState([]);
  const [formError, setFormError] = useState({});
  const [triggerFetch, setTriggerFetch] = useState(false);

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

  return (
    <AppContext.Provider
      value={{
        item,
        items,
        formError,
        handleDelete,
        handleEdit,
        fetchOne,
        fetchAdd,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, Wrapper };
