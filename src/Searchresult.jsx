import Productcard from "./Productcard";
import "./Searchresult.css";

function Searchresult(props) {
  return (
    <div className="resultContainer">
      <h3>Search result</h3>
      <div className="result">
        {props.products.map((product) => {
          return (
            <div className="productList" key={product.productid}>
              <Productcard {...product} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Searchresult;
