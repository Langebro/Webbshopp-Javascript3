import { useState } from "react";
import data from "./data.json";
import "./App.css";
import "./Searchfield.css";
import Searchresult from "./Searchresult";

function Searchfield() {
  const [search, setSearch] = useState(""); // state för sökfäkt
  const [products, setProducts] = useState(data.Products); // prroduktstate

  let onChange = (e) => {
    setSearch(e.target.value);
    if (search === "" || search === undefined) {
      setProducts(data.Products);
      return;
    }

    let changes =
      data.Products.filter((product) => {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
          return product;
        }
      }) ?? [];

    setProducts(changes);
  };
  return (
    <div className="searchWrapper">
      <div className="searchbar">
        <input
          className="searchBar"
          type="search"
          placeholder="Search"
          onChange={onChange}
          value={search}
        />
        <button className="searchBtn">Search</button>
      </div>
      <Searchresult products={products} />
    </div>
  );
}

export default Searchfield;
