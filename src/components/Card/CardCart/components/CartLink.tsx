import React, { FC, memo } from 'react';
import { Link } from "react-router-dom";
import style from "../cardCart.module.scss";
import { IProduct } from "../../../../config/types/product";

type Props = {
    item: IProduct;
}
const CartLink: FC<Props> = ({item}: Props) => {
    const { name, origin } = item;

    return (
        <Link to={`products/${item.id}`}>
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
    );
};

export default memo(CartLink);
