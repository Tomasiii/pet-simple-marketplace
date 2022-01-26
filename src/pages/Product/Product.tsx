import { memo } from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { Link, useParams } from "react-router-dom";
import { addProductToCart, selectAll } from "../../store/slices";
import { useAppDispatch, useAppSelector } from "../../hooks/hooksHelpers";
import style from "./product.module.scss";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import ROUTE_PATHS from "../../constants/routes";
import Error404 from "../../assets/img/Error404.png";

const Product = () => {
    const productsItems = useAppSelector(selectAll);
    const dispatch = useAppDispatch();
    const { id } = useParams<{ id: string }>();

    const item = productsItems.find((item) => item.id === id);
    if (!item)
        return <img src={Error404} alt="error 404" className={style.error404} />;

    const addToCart = () => dispatch(addProductToCart(item));

    return (
        <ErrorBoundary>
            <div className={style.product}>
                <div className={style.product__promo}>
                    <TransformWrapper>
                        {({ zoomIn, resetTransform }) => (
                            <div
                                onMouseOver={() => zoomIn()}
                                onMouseLeave={() => resetTransform()}
                            >
                                <TransformComponent>
                                    <img
                                        src="https://img.fozzyshop.com.ua/68845-large_default/napitok-coca-cola-banka.jpg"
                                        alt="goods"
                                        width={400}
                                    />
                                </TransformComponent>
                            </div>
                        )}
                    </TransformWrapper>
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
