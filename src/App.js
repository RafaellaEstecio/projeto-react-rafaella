import {useState} from "react"
import CartScreen from "./screens/Cart/CartScreen";
import ProductsScreen from "./screens/Products/ProductsScreen";


function App() {
  const [activeScreen, setActiveScreen] = useState ("ProductsScreen");
  
  const renderScreen = () => {
    switch(activeScreen){
      case "ProductsScreen":
        return <ProductsScreen/>
      case "CartScreen":
        return <CartScreen/>
      default:
        return <div>Página não encontrada</div>
    }
  }
  return renderScreen();
}

export default App;
