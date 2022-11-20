import { HeaderContainer } from "./Header.styled";
import cartIcon from "../../assets/icon-cart.png"
import searchIcon from "../../assets/icon-busca.png"
import menuIcon from "../../assets/icon-menu.png"

function Header() {
    return (
        <HeaderContainer>
            <div className="Logo">
                <a>
                    <img className="logoBtn" src={menuIcon} alt="Menu icon" />
                </a>
            </div>
            <div className="Nav">
                <button className="nav-item">
                    <img className="menuBtn" src={menuIcon} alt="Menu icon" />
                </button>

                <div className="search-container">
                    <input className="search-input nav-item" placeholder="Buscar"/>  
                    <button  className="nav-item">
                        <img className="search-icon" src={searchIcon} alt="Search icon" />
                    </button>
                </div>

                <button className="nav-item">
                    <img className="cart-icon" src={cartIcon} alt="Cart icon" />
                </button>
                
            </div>
        </HeaderContainer>
    );
  }
  
  export default Header;