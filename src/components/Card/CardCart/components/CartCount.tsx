import React, { FC, memo, useCallback } from 'react';
import style from "../cardCart.module.scss";
import { IProduct } from "../../../../config/types/product";
import { addProductToCart, removeProductFromCart } from "../../../../store/slices";
import { useAppDispatch } from "../../../../hooks/hooksHelpers";

type Props = {
    item: IProduct;
    curCardCount: number;
}

const CartCount: FC<Props> = ({item, curCardCount}: Props) => {
    const dispatch = useAppDispatch();
    const addToCart = useCallback(() => dispatch(addProductToCart(item)), [item]);
    const removeFromCart = useCallback(
        () => dispatch(removeProductFromCart(item)),
        [item]
    );
    return (
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
    );
};

export default memo(CartCount);
