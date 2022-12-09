
import { ProductCardContainer } from "./ProductCard.styled"
import { priceFormatter } from "../../utils/priceFormatter"

function ProductCard(props){
    const {
        product,
        addToCart,
        isOnProductsScreen,
        isOnCartScreen,
        decreaseQuantityInCart,
        increaseQuantityInCart,
        deleteFromCart
    } = props
    return(
        <ProductCardContainer>
                    <img  
                         src={product.image}
                         alt={product.imageAlt}
                         width="210"
                         height={300} />
                    <div >
                       
                        <div >
                            <h2>{product.name}</h2>
                            <h4>Descrição</h4>
                        </div>
                        <div className="card-price">
                            <h2>{priceFormatter.format(product.price)}</h2>
                        </div>
                        {
                            isOnCartScreen 
                            && <button 
                                    onClick={() => decreaseQuantityInCart(product)}
                                >
                                -
                                </button>
                        }
                        {
                            isOnCartScreen 
                            && <span> {product.quantity} </span>
                        }    
                    
                        {
                            isOnCartScreen && product.quantity 
                            && <button 
                                    onClick={() => increaseQuantityInCart(product)}
                                >
                                +
                                </button>
                        }
                        <div>
                        {
                            isOnCartScreen 
                            && <button 
                                    onClick={() =>deleteFromCart(product)}
                                 >
                                    Remover
                                </button>
                        } 
                        </div>
                       

                        {
                            isOnProductsScreen && <button onClick={() => addToCart(product)}>Adicionar ao carrinho</button>
                        }

                      
                        
                    </div>
                    
                </ProductCardContainer>
    )
}
export default ProductCard