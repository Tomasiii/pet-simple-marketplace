import React, { memo } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.scss";
import logoSvg from "../../assets/img/olx-logo.png";
import CartSvg from "../../assets/svg/CartSvg";
import wallet from "../../assets/img/wallet.png";
import { useProductsState } from "../../context/context";
import ROUTE_PATHS from "../../constants/routes";

const Header = function () {
    let { pathname } = useLocation();
    const { cart, totalPrice } = useProductsState();

    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <Link to={ROUTE_PATHS.HOME}>
                        <div className="header__logo">
                            <img src={logoSvg} alt="OLX logo" />
                        </div>
                    </Link>

                    {pathname !== ROUTE_PATHS.CART && (
                        <Link to={ROUTE_PATHS.CART}>
                            <div className="header__cart">
                                <h2 className="header__cart__item">
                                    <CartSvg cart={cart} />
                                    Корзина
                                </h2>
                                <div className="header__cart__counter">
                                    <img src={wallet} alt="1" />
                                    <span className="header__black">
                                        {totalPrice}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
};

export default memo(Header);
