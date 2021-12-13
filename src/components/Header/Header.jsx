import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss'
import logoSvg from '../../assets/img/olx-logo.png';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <Link to="/">
                        <div className="header__logo">
                            <img width="121" height="70" src={logoSvg} alt="OLX logo" />
                        </div>
                    </Link>

                    <div className="header__cart">
                        <Link to="/cart">

                        </Link>
                    </div>
                </div>

            </div>
        </header>
    );
}

export default Header;
