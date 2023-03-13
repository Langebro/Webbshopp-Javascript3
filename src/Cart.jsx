import { useState } from "react";
import Backdrop from "./Backdrop";
import Productcart from "./Productcart";
import { FiShoppingCart } from "react-icons/fi";

function Cart() {
  const [showCart, setCartState] = useState(false);
  let drawerToggleClickHandler = () => {
    setCartState({
      showCart: !showCart,
    });
  };
  return (
    <>
      <button className="cartBtn" onClick={drawerToggleClickHandler}>
        <FiShoppingCart />
      </button>
      <Productcart show={showCart} />
      {showCart && <Backdrop close={() => setCartState(false)} />}
    </>
  );
}

export default Cart;
