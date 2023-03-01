import data from "./data.json";
import Productcard from "./Productcard";

function Searchresult(props) {
  console.log(data);
  return (
    <div className="resultContainer">
      <h3>Search result</h3>
      <div className="result">
        {data.Products.map((product) => {
          return (
            <div key={product.productid}>
              <Productcard {...product} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Searchresult;
