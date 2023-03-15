import "./Cartitem.css";
import { useContext } from "react";
import { shopContext } from "./Context/Context";

function Cartitem(props) {
  const { addToCart, cartItems, removeFromCart, updateCartHandler } =
    useContext(shopContext); // tar in funktioner ifrån context
  return (
    <>
      <div className="cartItem">
        {props.name} {props.price}
        {" SEK"}
        <img src={props.img} />
        <div className="countHandler">
          <button onClick={() => removeFromCart(props.productid)}>-</button>
          <input
            className="countInput"
            value={cartItems[props.productid]}
            onChange={(e) =>
              updateCartHandler(Number(e.target.value), props.productid)
            }
          />
          <button onClick={() => addToCart(props.productid)}>+</button>
        </div>
      </div>
    </>
  );
}

export default Cartitem;
