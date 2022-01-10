import React, { FC, memo } from 'react';
import CartSvg from "../../../../config/assets/svg/CartSvg";
import CartBucketSvg from "../../../../config/assets/svg/CartBucketSvg";
import "../../cart.scss";

type Props = {
    onClearCart(): void
}

const CartTop: FC<Props> = ({onClearCart}: Props) => {
    return (
        <div className="cart__top">
            <h2 className="content__title">
                <CartSvg />
                Корзина
            </h2>
            <div className="cart__clear">
                <CartBucketSvg />
                <span onClick={onClearCart}>Очистить корзину</span>
            </div>
        </div>
    );
};

export default memo(CartTop);
