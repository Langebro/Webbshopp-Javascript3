import { createContext, useContext, useState } from "react";
import data from "../data.json";

export const shopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < data.Products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalAmount = () => {
    let totaltAMount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = data.Products.find(
          (product) => product.productid == item
        );
        totaltAMount += cartItems[item] * itemInfo.price;
      }
    }

    return totaltAMount;
  };

  const addToCart = (itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] + 1 }));
  };

  const removeFromCart = (itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] - 1 }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  const updateCartHandler = (newAmount, itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: newAmount }));
  };

  const contextValue = {
    getTotalAmount,
    addToCart,
    removeFromCart,
    checkout,
    cartItems,
    updateCartHandler,
  };
  return (
    <shopContext.Provider value={contextValue}>
      {props.children}
    </shopContext.Provider>
  );
};
