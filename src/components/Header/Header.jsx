import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import logoSvg from "../../assets/img/olx-logo.png";
import CartSvg from "../../assets/svg/CartSvg";

const Header = function () {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <Link to="/">
                        <div className="header__logo">
                            <img
                                width="121"
                                height="70"
                                src={logoSvg}
                                alt="OLX logo"
                            />
                        </div>
                    </Link>

                    <div className="header__cart">
                        <Link to="/cart">
                            <h2 className="header__cart__item">
                                <CartSvg />
                                Корзина
                            </h2>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
