import React, { FC, memo } from 'react';
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../../hooks/hooksHelpers";
import { productsSelector } from "../../../../store/selectors";
import "../../cart.scss";

const CartBottom: FC = () => {
    const { totalCount, totalPrice } = useAppSelector(productsSelector);

    return (
        <div className="cart__bottom">
            <div className="cart__bottom-details">
                                <span>
                                    Всего товаров: <b>{totalCount} шт.</b>
                                </span>
                <span>
                                    Сумма заказа: <b>{totalPrice} $</b>
                                </span>
            </div>
            <div className="cart__bottom-buttons">
                <Link
                    to="/"
                    className="button button--outline button--add go-back-btn"
                >
                    <span>Вернуться назад</span>
                </Link>
                <button className="pay-btn">
                    <span>Оплатить сейчас</span>
                </button>
            </div>
        </div>
    );
};

export default memo(CartBottom);
