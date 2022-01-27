import style from "./cardHome.module.scss";
import { Link } from "react-router-dom";
import { FC, memo, useCallback } from "react";
import ROUTE_PATHS from "../../../constants/routes";
import { addProductToCart } from "../../../store/slices";
import { IProduct } from "../../../models/Product";
import { useAppDispatch } from "../../../hooks/hooksHelpers";

const CardHome: FC<IProduct> = (item) => {
    const { name, price, origin } = item;
    const dispatch = useAppDispatch();

    const addToCart = useCallback(() => dispatch(addProductToCart(item)), [item]);

    return (
        <div className={style.card}>
            <Link to={`${ROUTE_PATHS.PRODUCTS}${item.id}`}>
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
            </Link>
            <div className={style.card__price}>
                <div className={style.card__buy}>
                    <div>
                        Price:
                        <br />
                        <span>{price} $</span>
                    </div>
                    <div>
                        <button
                            className={style.card__buy__button}
                            onClick={addToCart}
                        >
                            Buy
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(CardHome);
