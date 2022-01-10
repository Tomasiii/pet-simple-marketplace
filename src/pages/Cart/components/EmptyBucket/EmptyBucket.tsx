import React, { FC } from 'react';
import '../../cart.scss';
import cartEmptyImage from "../../../../config/assets/img/empty-cart.png";
import { Link } from "react-router-dom";
import ROUTE_PATHS from "../../../../config/constants/routes";

const EmptyBucket: FC = () => {
    return (
        <div className="cart cart--empty">
            <h2>
                Корзина пустая <i>😕</i>
            </h2>
            <p>
                Вероятней всего, вы не заказывали ещё товары.
                <br />
                Для того, чтобы заказать, перейди на главную страницу.
            </p>
            <img src={cartEmptyImage} alt="Empty cart" />
            <Link to={ROUTE_PATHS.HOME} className="button button--black">
                <span>Вернуться назад</span>
            </Link>
        </div>
    );
};

export default EmptyBucket;
