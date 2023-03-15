import data from "./data.json";
import { useContext } from "react";
import { shopContext } from "./Context/Context";
import Cartitem from "./Cartitem";
import "./Productcart.css";

function Productcart(props) {
  const { cartItems, getTotalAmount } = useContext(shopContext);
  const totalAmount = getTotalAmount();
  let drawerClasses = "sideDrawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <div className="open">
      <div className={drawerClasses}>
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
          <p>Total Amount: {totalAmount}</p>
        </div>
      </div>
    </div>
  );
}

export default Productcart;
