import React from "react";
import { IHistoryBodyPieces } from "../../../../../models/History";
import style from "../../../../Card/CardCart/cardCart.module.scss";

interface IProps {
    orderDetails: IHistoryBodyPieces;
}

const HistoryProductsDetail = ({ orderDetails }: IProps) => {
    return (
        <div>
            <div className="container container--cart">
                <div className="cart">
                    <div className="content__items">
                        {orderDetails.map(({ product, count }, index) => (
                            <div className={style.card} key={index}>
                                <div className={style.card__product}>
                                    <img
                                        className={style.card__img}
                                        src="https://img.fozzyshop.com.ua/68845-large_default/napitok-coca-cola-banka.jpg"
                                        alt="goods"
                                    />
                                    <p className={style.card__title}>
                                        {product.name}
                                        <br />
                                        <span>Made in {product.origin}</span>
                                    </p>
                                </div>

                                <div className={style.card__count}>
                                    <div>{count}</div>
                                </div>

                                <div className={style.card__price}>
                                    <div className={style.card__buy}>
                                        <div>
                                            Price:
                                            <br />
                                            <span>{product.price} $</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HistoryProductsDetail;
