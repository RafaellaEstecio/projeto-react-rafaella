import { HeaderContainer } from "./Header.styled";
import cartIcon from "../../assets/icon-cart.png"
import searchIcon from "../../assets/icon-busca.png"
import menuIcon from "../../assets/icon-menu.png"
import logoIcon from "../../assets/logo1.jpg"

function Header(props) {
    const{
        goToCartScreen,
        goToProductsScreen,
        itemsInCart,
        filterText,
        onChangeFilterText
    } = props

    return (
        <HeaderContainer>
            <div className="Logo">
                <a onClick={goToProductsScreen} className="btn-logSSo">
                    <img className="logo-img" src={logoIcon} alt="Logo icon" />
                </a>
            </div>
            <div className="Nav">
              
                <button className="nav-item" >
                    <img className="menuBtn" src={menuIcon} alt="Menu icon" />
                </button>

                <div className="search-container">
                    <input 
                        className="search-input nav-item" 
                        placeholder="Buscar"
                        onKeyUp={onChangeFilterText}
                    />  
                    {/* <button className="nav-item">
                        <img className="search-icon" src={searchIcon} alt="Search icon" />
                    </button> */}
                </div>

                <button  onClick={goToCartScreen} className="cart-button">
                    <img className="cart-icon" src={cartIcon} alt="Cart icon" />
                    {
                        itemsInCart > 0
                        && <span className="cart-badge">{itemsInCart}</span>
                    }
                    
                </button>
                
            </div>
        </HeaderContainer>
    );
  }
  
  export default Header;