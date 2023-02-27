import "./App.css";
import Searchresult from "./Searchresult";

function Searchfield() {
  return (
    <div className="searchWrapper">
      <input placeholder="search" />
      <Searchresult />
      <button>Search</button>
    </div>
  );
}

export default Searchfield;
