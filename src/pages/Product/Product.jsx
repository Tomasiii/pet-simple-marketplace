import { Link, useParams } from "react-router-dom";
import { useProductsDispatch, useProductsState } from "../../context/context";
import style from "./product.module.scss";
import { memo } from "react";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";

function Product() {
    const { items } = useProductsState();
    const dispatch = useProductsDispatch();
    const { id } = useParams();

    const item = items.filter((item) => item.id === id)[0];
    const addToCart = () => dispatch({ type: "ADD_PRODUCT_TO_CART", payload: item });

    return (
        <ErrorBoundary>
            <div className={style.product}>
                <div className={style.product__promo}>
                    <img
                        src="https://wheatskw.com/web/image/product.template/47/image_256"
                        alt="goods"
                    />
                    <p>{item?.name}</p>
                </div>

                <div className={style.product__info}>
                    <p className={style.product__text}>
                        {" "}
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Debitis enim eveniet repudiandae ullam voluptatibus! Eos
                        incidunt, magnam minima omnis perferendis ratione sed totam
                        velit! Atque autem consectetur magnam quod.Lorem ipsum dolor
                        sit amet, consectetur adipisicing elit. Debitis enim eveniet
                        repudiandae ullam voluptatibus! Eos incidunt, magnam minima
                        omnis perferendis ratione sed totam velit! Atque autem
                        consectetur magnam quod. Adipisci cum expedita facilis
                        laudantium nulla placeat quasi quisquam sapiente vitae!
                    </p>
                    <p className={style.product__origin}>Made in {item?.origin}</p>
                    <div className={style.product__buy}>
                        <div>
                            Price: <span>{item?.price} $</span>
                        </div>
                        <div>
                            <Link to="/cart">
                                <button
                                    className={style.product__buy__button}
                                    onClick={addToCart}
                                >
                                    Купить
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </ErrorBoundary>
    );
}

export default memo(Product);
