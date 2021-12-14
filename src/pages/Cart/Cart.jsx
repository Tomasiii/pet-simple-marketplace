import React from "react";
import { Link } from "react-router-dom";
import cartEmptyImage from "../../assets/img/empty-cart.png";
import "./cart.scss";
import CartSvg from "../../assets/svg/CartSvg";
import CartBucketSvg from "../../assets/svg/CartBucketSvg";
import { useProductsDispatch, useProductsState } from "../../context/context";

const Cart = function () {
    const dispatch = useProductsDispatch();
    console.log(useProductsState());
    const { cart } = useProductsState();

    const onClearCart = () => {
        if (window.confirm("Вы действительно хотите очистить корзину?")) {
            // dispatch(clearCart());
        }
    };

    // const onRemoveItem = (id) => {
    //     if (window.confirm('Вы действительно хотите удалить?')) {
    //         dispatch(removeCartItem(id));
    //     }
    // };
    //
    // const onPlusItem = (id) => {
    //     dispatch(plusCartItem(id));
    // };
    //
    // const onMinusItem = (id) => {
    //     dispatch(minusCartItem(id));
    // };
    //
    const onClickOrder = () => {
        console.log("ВАШ ЗАКАЗ - "); //         console.log('ВАШ ЗАКАЗ', items);
    };
    const totalCount = cart.length;
    const totalPrice = 500;

    return (
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
                        {/* {addedPizzas.map((obj) => ( */}
                        {/*    <Card/> */}
                        {/* ))} */}
                    </div>
                    <div className="cart__bottom">
                        <div className="cart__bottom-details">
                            <span>
                                Всего пицц: <b>{totalCount} шт.</b>
                            </span>
                            <span>
                                Сумма заказа: <b>{totalPrice} ₽</b>
                            </span>
                        </div>
                        <div className="cart__bottom-buttons">
                            <a
                                href="/"
                                className="button button--outline button--add go-back-btn"
                            >
                                <svg
                                    width="8"
                                    height="14"
                                    viewBox="0 0 8 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7 13L1 6.93015L6.86175 1"
                                        stroke="#D3D3D3"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <Link to="/">
                                    <span>Вернуться назад</span>
                                </Link>
                            </a>
                            <button onClick={onClickOrder} className="pay-btn">
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
                        Вероятней всего, вы не заказывали ещё пиццу.
                        <br />
                        Для того, чтобы заказать пиццу, перейди на главную страницу.
                    </p>
                    <img src={cartEmptyImage} alt="Empty cart" />
                    <Link to="/" className="button button--black">
                        <span>Вернуться назад</span>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Cart;
