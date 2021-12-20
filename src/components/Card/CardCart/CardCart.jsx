import style from "./cardCart.module.scss";
import { useProductsDispatch } from "../../../context/context";
import React, { memo } from "react";
import { Link } from "react-router-dom";
import types from "../../../constants/dispatchTypes";
import ROUTE_PATHS from "../../../constants/routes";

const CardCart = function (props) {
    const { item, curCardCount } = props;
    const { name, price, origin } = item;
    const dispatch = useProductsDispatch();

    const addToCart = () =>
        dispatch({ type: types.ADD_PRODUCT_TO_CART, payload: item });
    const removeFromCart = () =>
        dispatch({ type: types.REMOVE_PRODUCT_FORM_CART, payload: item });
    const cleaningCartItem = () =>
        dispatch({ type: types.CLEANING_CART_ITEM, payload: item });

    return (
        <div className={style.card}>
            <Link to={`${ROUTE_PATHS.PRODUCTS}${item.id}`}>
                <div className={style.card__product}>
                    <img
                        className={style.card__img}
                        src="https://wheatskw.com/web/image/product.template/47/image_256"
                        alt="goods"
                    />
                    <p className={style.card__title}>
                        {name}
                        <br />
                        <span>Made in {origin}</span>
                    </p>
                </div>
            </Link>

            <div className={style.card__count}>
                <i
                    className="fas fa-plus-circle"
                    style={{ fontSize: "37px" }}
                    onClick={addToCart}
                />
                <div>{curCardCount}</div>
                <i
                    className="fas fa-minus-circle"
                    style={{ fontSize: "37px" }}
                    onClick={removeFromCart}
                />
            </div>

            <div className={style.card__price}>
                <div className={style.card__buy}>
                    <div>
                        Price:
                        <br />
                        <span>{price} $</span>
                    </div>
                </div>
            </div>

            <div className={style.card__delete} onClick={cleaningCartItem}>
                <i className="far fa-times-circle"></i>
            </div>
        </div>
    );
};

export default memo(CardCart);
