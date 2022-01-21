import style from "./cardCart.module.scss";
import React, { FC, memo, useCallback } from "react";
import { Link } from "react-router-dom";
import ROUTE_PATHS from "../../../constants/routes";
import {
    addProductToCart,
    cleaningCartItem,
    removeProductFromCart
} from "../../../store/slices";
import { IProduct } from "../../../models/Product";
import { useAppDispatch } from "../../../hooks/hooksHelpers";

interface IProps {
    item: IProduct;
    curCardCount: number;
}

const CardCart: FC<IProps> = ({ item, curCardCount }) => {
    const { name, price, origin } = item;
    const dispatch = useAppDispatch();

    const addToCart = useCallback(() => dispatch(addProductToCart(item)), [item]);
    const removeFromCart = useCallback(
        () => dispatch(removeProductFromCart(item)),
        [item]
    );
    const removeItemGroup = useCallback(
        () => dispatch(cleaningCartItem(item)),
        [item]
    );

    return (
        <div className={style.card}>
            <Link to={`${ROUTE_PATHS.PRODUCTS}${item.id}`}>
                <div className={style.card__product}>
                    <img
                        className={style.card__img}
                        src="https://img.fozzyshop.com.ua/68845-large_default/napitok-coca-cola-banka.jpg"
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

            <div className={style.card__delete} onClick={removeItemGroup}>
                <i className="far fa-times-circle" />
            </div>
        </div>
    );
};

export default memo(CardCart);
