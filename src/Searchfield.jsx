import { useEffect, useState } from "react";
import "./App.css";
import Searchresult from "./Searchresult";

function Searchfield() {
  const [search, setSearch] = useState("");

  let onChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="searchWrapper">
      <div className="searchbar">
        <input
          type="search"
          placeholder="Search"
          onChange={onChange}
          value={search}
        />
        <button className="btn btn-primary">Search</button>
      </div>
      <Searchresult />
    </div>
  );
}

export default Searchfield;
