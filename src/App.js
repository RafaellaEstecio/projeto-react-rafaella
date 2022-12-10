import {useState} from "react";
import Header from "./components/Header/Header";
import CartScreen from "./screens/Cart/CartScreen";
import ProductsScreen from "./screens/Products/ProductsScreen";


function App() {
  
  const [activeScreen, setActiveScreen] = useState ("ProductsScreen");
  const [filterText,setFilterText] = useState("")
  const [cart,setCart] = useState(JSON.parse(localStorage.getItem("cart")) || [])
  const [isFilterText,setIsFilterText] = useState(false)
  const [minPrice,setMinPrice]=useState(-Infinity)
  const [maxPrice,setMaxPrice]=useState(-Infinity)
  
  const goToProductsScreen = () => {
    setActiveScreen("ProductsScreen")
    window.location.reload(true);
  };
  const goToCartScreen = () => setActiveScreen("CartScreen");

  const addToCart = (productToAdd) =>{
    const newCart = [...cart]

    const productFound= newCart.find(
      (productInCart) => productInCart.id === productToAdd.id
    )

    if(!productFound){
      const newProduct = {...productToAdd,quantity:1}
      newCart.push(newProduct)
    } else {
        productFound.quantity++
    }
    localStorage.setItem("cart",JSON.stringify(newCart))
    setCart(newCart);
   }
  // const mudaEstado = (el) =>{
  //   const display = document.getElementById(el).style.display;
  //   if(display=="none")
  //       document.getElementById(el).style.display ='block';
  //   else
  //       document.getElementById(el).style.display = 'none';

  // }



  const deleteFromCart =(productToDelete) =>{
    const newCart = [...cart]

    const indexFound= newCart.findIndex(
      (productInCart) => productInCart.id === productToDelete.id
    )
    newCart.splice(indexFound,1)
    localStorage.setItem("cart",JSON.stringify(newCart))
    setCart(newCart);
  }
  
  const increaseQuantityInCart = (productToIncrease) => {
    const newCart = [...cart]

    const productFound = newCart.find(
      (productInCart) => productInCart.id === productToIncrease.id
    )
    productFound.quantity++
    localStorage.setItem("cart",JSON.stringify(newCart))
    setCart(newCart);
  }

  const decreaseQuantityInCart = (productToDecrease) => {
    if(productToDecrease.quantity > 1){
      const newCart = [...cart]

      const productFound = newCart.find(
        (productInCart) => productInCart.id === productToDecrease.id
      )
      productFound.quantity--
      localStorage.setItem("cart",JSON.stringify(newCart))
      setCart(newCart);
    }else{
      deleteFromCart(productToDecrease)
    }
  }

  const onChangeFilterText = (e) =>{
    if(e.keyCode ===13){
      setIsFilterText(true)
      setFilterText(e.target.value)
    }
  }
  
  const renderScreen = () => {
    switch(activeScreen){
      case "ProductsScreen":
        return <ProductsScreen 
                  addToCart={addToCart}
                  filterText={filterText}
                  setFilterText={setFilterText}
                  setMinPrice={setMinPrice}
                  minPrice={minPrice}
                  setMaxPrice={setMaxPrice}
                  maxPrice={maxPrice}
                  isFilterText={isFilterText}
                />
      case "CartScreen":
        return <CartScreen
                 cart={cart}
                 increaseQuantityInCart={increaseQuantityInCart}
                 decreaseQuantityInCart={decreaseQuantityInCart}
                 deleteFromCart={deleteFromCart}
                />
      default:
        return <div>Página não encontrada</div>
    }
  }
  return (
    <>
        <Header
        goToProductsScreen={goToProductsScreen}
        goToCartScreen={goToCartScreen}
        itemsInCart={cart.length}
        onChangeFilterText={onChangeFilterText}
        filterText={filterText}
        // mudaEstado={mudaEstado}
        />
        
        {/* <filter
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        /> */}
        
   
        {renderScreen()}
    </>
  );
}

export default App;
