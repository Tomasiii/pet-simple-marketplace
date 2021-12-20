import style from "./cardHome.module.scss";
import { useProductsDispatch } from "../../../context/context";
import { Link } from "react-router-dom";
import { memo } from "react";
import types from "../../../constants/dispatchTypes";
import ROUTE_PATHS from "../../../constants/routes";

const CardHome = function (item) {
    const { name, price, origin } = item;
    const dispatch = useProductsDispatch();

    const addToCart = () =>
        dispatch({ type: types.ADD_PRODUCT_TO_CART, payload: item });

    return (
        <div className={style.card}>
            <Link to={`${ROUTE_PATHS.PRODUCTS}${item.id}`}>
                <img
                    className={style.card__img}
                    src="https://wheatskw.com/web/image/product.template/47/image_256"
                    alt="goods"
                />
                <p className={style.card__title}>
                    {name}
                    <br />
                    <span>
                        Made in
                        {origin}
                    </span>
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
                            Купить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(CardHome);
