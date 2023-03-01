import "./App.css";

function Productcard(props) {
  return (
    <div className="productcard">
      {props.name}
      {props.price}
      <img src={props.img}></img>
    </div>
  );
}

export default Productcard;
