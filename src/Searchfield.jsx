import { useState } from "react";
import data from "./data.json";
import "./App.css";
import "./Searchfield.css";
import Searchresult from "./Searchresult";

function Searchfield() {
  const [search, setSearch] = useState(""); // state för sökfält
  const [products, setProducts] = useState(data.Products); // prroduktstate

  let onChange = (e) => {
    //
    setSearch(e.target.value); // använder sökstaten för att få fram värde ur input
    var searchValue = e.target.value;
    if (searchValue === "" || searchValue === undefined) {
      setProducts(data.Products);
      return;
    }
    if (searchValue === "") {
      return data.Products;
    }

    let changes =
      data.Products.filter((product) => {
        // kollar om det som skrivs i sökfältet matchar någon av produkterna
        if (product.name.toLowerCase().includes(searchValue.toLowerCase())) {
          return product; // bokstäverna som skickas in matchar produktnamnet returneras produkt
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
