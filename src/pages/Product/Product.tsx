import { Link, useParams } from "react-router-dom";
import style from "./product.module.scss";
import { memo } from "react";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import ROUTE_PATHS from "../../constants/routes";
import { addProductToCart } from "../../store/slices";
import productsSelector from "../../store/selectors/productsSelector";
import { useAppDispatch, useAppSelector } from "../../hooks/hooksHelpers";

const Product = () => {
    const { items: productsItems } = useAppSelector(productsSelector);
    const dispatch = useAppDispatch();
    const { id } = useParams<{ id: string }>();

    const [item] = productsItems.filter((item) => item.id === id);
    const addToCart = () => dispatch(addProductToCart(item));

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
                            <Link to={ROUTE_PATHS.CART}>
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
};

export default memo(Product);
