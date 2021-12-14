import style from "./card.module.scss";
import { useProductsDispatch } from "../../context/context";

const Card = function (item) {
    const { name, price, origin } = item;
    const dispatch = useProductsDispatch();

    const addToCart = () => {
        return dispatch({ type: "ADD_PRODUCT_TO_CART", payload: item });
    };
    return (
        <div className={style.card}>
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
            <div className={style.card__price}>
                <div className={style.card__buy}>
                    <div>
                        Price:
                        <br />
                        <span>
                            {price} <span>usd</span>
                        </span>
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

export default Card;
