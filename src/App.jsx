import "./App.css";
import Productcart from "./Productcart";
import Searchfield from "./Searchfield";
import { ShopContextProvider } from "./Context/Context";

function App() {
  return (
    <div className="webbshoppApp">
      <h1>The Magic Store</h1>
      <ShopContextProvider>
        <Productcart />
        <Searchfield />
      </ShopContextProvider>
    </div>
  );
}

export default App;
