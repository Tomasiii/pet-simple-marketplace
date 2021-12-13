import React from "react";
import style from './card.module.scss'

const Card = (item) => {
    let {name, price, origin, id} = item;
    return (
        <div className={style.card}>
                <img
                    className={style.card__img}
                    src="https://wheatskw.com/web/image/product.template/47/image_256"
                    alt="goods"
                />
            <p className={style.card__title}>
                {name}<br/>
                <span>Made in {origin}</span>
            </p>
            <div className={style.card__price}>
                Price:<br/>
                <span>{price} <span>usd</span></span>
            </div>
        </div>
    )
}

export default Card;