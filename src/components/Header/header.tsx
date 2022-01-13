import React from "react";
import './styles/header.css';
const Header: React.FC = () => {
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
                       <li><i className="fas fa-shopping-cart"></i></li>
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