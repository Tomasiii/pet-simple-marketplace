import React, { memo } from "react";
import { Link } from "react-router-dom";
import cartEmptyImage from "../../assets/img/empty-cart.png";
import "./cart.scss";
import CartSvg from "../../assets/svg/CartSvg";
import CartBucketSvg from "../../assets/svg/CartBucketSvg";
import CardCart from "../../components/Card/CardCart/CardCart";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import ROUTE_PATHS from "../../constants/routes";
import { cleaningCart } from "../../store/slices";
import productsSelector from "../../store/selectors/productsSelector";
import { useAppDispatch, useAppSelector } from "../../hooks/hooksHelpers";

const Cart = () => {
    const dispatch = useAppDispatch();
    const { cart, totalCount, totalPrice } = useAppSelector(productsSelector);

    const onClearCart = () => {
        if (window.confirm("Вы действительно хотите очистить корзину?")) {
            dispatch(cleaningCart());
        }
    };

    return (
        <ErrorBoundary>
            <div className="container container--cart">
                {totalCount ? (
                    <div className="cart">
                        <div className="cart__top">
                            <h2 className="content__title">
                                <CartSvg />
                                Корзина
                            </h2>
                            <div className="cart__clear">
                                <CartBucketSvg />
                                <span onClick={onClearCart}>Очистить корзину</span>
                            </div>
                        </div>
                        <div className="content__items">
                            {Object.values(cart).map((item) => (
                                <CardCart
                                    key={item[0].id}
                                    item={item[0]}
                                    curCardCount={item.length}
                                />
                            ))}
                        </div>
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
                    </div>
                ) : (
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
                )}
            </div>
        </ErrorBoundary>
    );
};

export default memo(Cart);
