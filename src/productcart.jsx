import data from "./data.json";
import { useContext, useState } from "react";
import { shopContext } from "./Context/Context";
import Cartitem from "./Cartitem";
import "./Productcart.css";

function Productcart() {
  const { cartItems } = useContext(shopContext);
  return (
    <div className="cart">
      <h3>Productcart</h3>
      <div className="cartItems">
        {data.Products.map((product) => {
          if (cartItems[product.productid] > 0) {
            return (
              <div className="cartlist" key={product.productid}>
                <Cartitem {...product} />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Productcart;
