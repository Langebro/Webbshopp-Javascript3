import "./App.css";

function Productcard(props) {
  return (
    <div className="productlist">
      <div className="wrapper">
        <div className="productcard">
          <span className="product">{props.name}</span>
          <span className="product">{props.price}</span>
          <span className="product">
            <img src={props.img}></img>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Productcard;
