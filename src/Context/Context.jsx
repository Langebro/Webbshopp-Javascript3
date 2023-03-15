import { createContext, useState } from "react";
import data from "../data.json";

export const shopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {}; // sätteer cart till tomt objekt
  for (let i = 0; i < data.Products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart; //skapar standardcarten med hjälp av objektet från jsonfil
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalAmount = () => {
    let totaltAMount = 0;

    for (const item in cartItems) {
      // kollar igenom innehållet i varukorgen
      if (cartItems[item] > 0) {
        // om där finns ett ID letas priset för varan upp
        let itemInfo = data.Products.find(
          (product) => product.productid == item
        );
        totaltAMount += cartItems[item] * itemInfo.price; // antal av ID * pris på varan/ID
      }
    }

    return totaltAMount;
  };

  const addToCart = (itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] + 1 }));
  }; // Ett nytt objekt skapas genom att addera 1 produkt till hur objektet tidigare såg ut

  const removeFromCart = (itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] - 1 }));
  }; // Ett nytt objekt skapas genom att ta bort 1 produkt till hur objektet tidigare såg ut

  const updateCartHandler = (newAmount, itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: newAmount }));
  };

  const contextValue = {
    getTotalAmount,
    addToCart,
    removeFromCart,
    cartItems,
    updateCartHandler,
  };
  return (
    <shopContext.Provider value={contextValue}>
      {props.children}
    </shopContext.Provider>
  );
};
