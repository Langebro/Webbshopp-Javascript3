import "./App.css";
import Searchfield from "./Searchfield";
import { ShopContextProvider } from "./Context/Context";
import Cart from "./Cart";

function App() {
  return (
    <div className="webbshoppApp">
      <h1>The Magic Store</h1>
      <ShopContextProvider>
        <Cart />
        <Searchfield />
      </ShopContextProvider>
    </div>
  );
}

export default App;
