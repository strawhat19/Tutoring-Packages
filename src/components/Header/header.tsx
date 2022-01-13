import React, {useContext, useEffect} from "react";
import './styles/header.css';
import cartContext from "../../contexts/cartContext";

const Header: React.FC = () => {
    const cart = useContext(cartContext) || [];
    
    useEffect(() => {
        let cartItems:any = document.querySelector(`.cartItems`);
        let cartStore = JSON.parse(localStorage.getItem(`Shopping Cart`) || `[]`);
        if (cartStore) {
            cartItems.innerHTML = JSON.parse(localStorage.getItem(`Shopping Cart`)  || `[]`).length;
        } else {
            cartItems.innerHTML = 0;
        }
    }, [])
    
    return (
        <header>
            <div className="inner">
                <div className="navigation">
                    <a title="Home" className="homeLink" href="./">
                        <i className="logo fas fa-code" title="Logo" ></i>
                    </a>
                    <ul>
                        <li className="navigation-tab"><a href="/browse/classes">Classes</a></li><li className="navigation-tab"><a href="/browse/students">Students</a></li><li className="navigation-tab"><a href="/browse/projects">Projects</a></li>
                    </ul>
                </div>
                <div className="profileSettings navigation">
                   <ul>
                       <li><i className="fas fa-search"></i></li>
                       <li><i className="cart fas fa-shopping-cart">
                            <span className="cartItems" id="cartItems">{cart.length}</span>
                        </i></li>
                       <li><i className="fas fa-bell"></i></li>
                       <li>Welcome, User</li>
                   </ul>
                   <div className="dropdown">
                        <img alt="avatar" src="https://raw.githubusercontent.com/strawhat19/react-netflix-clone/main/public/assets/defaultAvatar.png" className="avatar" />
                        <span className="caret"><i className="fas fa-caret-down"></i></span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header