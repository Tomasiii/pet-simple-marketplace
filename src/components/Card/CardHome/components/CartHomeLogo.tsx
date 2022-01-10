import React, { FC, memo } from "react";
import style from "../cardHome.module.scss";
import { Link } from "react-router-dom";
import { IProduct } from "../../../../config/types/product";

type Props = {
    item: IProduct;
};

const CartHomeLogo: FC<Props> = ({ item }: Props) => {
    const { name, origin } = item;

    return (
        <Link to={`products/${item.id}`}>
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
        </Link>
    );
};

export default memo(CartHomeLogo);
