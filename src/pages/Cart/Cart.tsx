import React, { FC, memo } from "react";
import "./cart.scss";
import CardCart from "../../components/Card/CardCart/CardCart";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import { cleaningCart } from "../../store/slices";
import { useAppDispatch, useAppSelector } from "../../hooks/hooksHelpers";
import { productsSelector } from "../../store/selectors";
import EmptyBucket from "./components/EmptyBucket/EmptyBucket";
import { IProduct } from "../../config/types/product";
import CartTop from "./components/CartTop/CartTop";
import CartBottom from "./components/CartBottom/CartBottom";

const Cart: FC = () => {
    const dispatch = useAppDispatch();

    const { cart } = useAppSelector(productsSelector);

    const onClearCart = () => {
        if (window.confirm("Вы действительно хотите очистить корзину?")) {
            dispatch(cleaningCart());
        }
    };

    if(Object.values(cart.entities).length === 0) {
        return <EmptyBucket />
    }

    return (
        <ErrorBoundary>
            <div className="container container--cart">
                    <div className="cart">
                        <CartTop onClearCart={onClearCart} />
                        <div className="content__items">
                            {Object.values(cart.entities).map((item) =>  (
                                    <CardCart
                                        key={(item as IProduct).id as string}
                                        item={item as IProduct}
                                        curCardCount={(item as IProduct).count as number}
                                    />
                                )
                            )}
                        </div>
                        <CartBottom />
                    </div>
            </div>
        </ErrorBoundary>
    );
};

export default memo(Cart);
