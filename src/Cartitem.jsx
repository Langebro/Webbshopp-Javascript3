import "./Cartitem.css";
import { shopContext } from "./Context/Context";

function Cartitem(props) {
  console.log(props);
  return (
    <>
      <div className="cartItem">
        {props.name} {props.price}
        {" SEK"}
        <img src={props.img} />
      </div>
    </>
  );
}

export default Cartitem;
