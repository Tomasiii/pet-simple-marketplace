import React, { FC, memo } from "react";
import style from "../cardCart.module.scss";
import { IProduct } from "../../../../config/types/product";

type Props = {
    item: IProduct;
};

const CartPrice: FC<Props> = ({ item: { price } }: Props) => {
    return (
        <div className={style.card__price}>
            <div className={style.card__buy}>
                <div>
                    Price:
                    <br />
                    <span>{price} $</span>
                </div>
            </div>
        </div>
    );
};

export default memo(CartPrice);
