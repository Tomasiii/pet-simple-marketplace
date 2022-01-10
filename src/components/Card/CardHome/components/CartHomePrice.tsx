import React, { FC, memo, useCallback } from "react";
import style from "../cardHome.module.scss";
import { useAppDispatch } from "../../../../hooks/hooksHelpers";
import { addProductToCart } from "../../../../store/slices";
import { IProduct } from "../../../../config/types/product";

type Props = {
    item: IProduct;
};

const CartHomePrice: FC<Props> = ({ item }: Props) => {
    const { price } = item;
    const dispatch = useAppDispatch();

    const addToCart = useCallback(() => dispatch(addProductToCart(item)), [item]);
    return (
        <div className={style.card__price}>
            <div className={style.card__buy}>
                <div>
                    Price:
                    <br />
                    <span>{price} $</span>
                </div>
                <div>
                    <button className={style.card__buy__button} onClick={addToCart}>
                        Купить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default memo(CartHomePrice);
