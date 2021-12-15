import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.scss";
import logoSvg from "../../assets/img/olx-logo.png";
import CartSvg from "../../assets/svg/CartSvg";

const Header = function () {
    let { pathname } = useLocation();

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

                    {pathname !== "/cart" && (
                        <Link to="/cart">
                            <div className="header__cart">
                                <h2 className="header__cart__item">
                                    <CartSvg />
                                    Корзина
                                </h2>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
