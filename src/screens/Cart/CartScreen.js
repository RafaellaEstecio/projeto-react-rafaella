import ProductCard from "../../components/ProductCard/ProductCard"
import { priceFormatter } from "../../utils/priceFormatter";
import {Main} from "./CartScreen.styled"


function CartScreen(props) {
    const {
        cart,
        increaseQuantityInCart,
        decreaseQuantityInCart,
        deleteFromCart

    } = props

    const total = cart.reduce(
        (acc,product)=> product.price * product.quantity + acc,
        0
    )
    return (
        <Main>
        <section>
            <h1>Cart </h1>
            <hr/>
            <div>
                {cart.map((product)=>(
                    <ProductCard 
                        product={product}
                        key={product.id}
                        isOnCartScreen={true}
                        increaseQuantityInCart={increaseQuantityInCart}
                        decreaseQuantityInCart={decreaseQuantityInCart}
                        deleteFromCart={deleteFromCart}
                        
                    />       


                ))}
            </div>
             <div>
                <h1> Total = {priceFormatter.format(total)}</h1>
             </div>
        </section>
       
    </Main>
    );
  }
  
  export default CartScreen;