import React from "react";
import logo from "../../images/logo.png";
import "./header.css"

function Header() {
    return <>
        <nav>
            <div className="logo">
                <img src={logo} alt="LogoImg" />
                <h1>Tushar React</h1>
            </div>
            <div className="headMenu">
                <ul className="menu">
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Contacts</a></li>
                </ul>
                <div className="navBtns">
                <button className="mainBtn">Get Started</button>
                <button className="navHelpBtn">Help</button>
                </div>
            </div>
        </nav>
    </>
}


export default Header;