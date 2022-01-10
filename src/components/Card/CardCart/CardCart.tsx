import React, { FC, memo } from "react";
import { IProduct } from "../../../config/types/product";
import CartLink from "./components/CartLink";
import CartCount from "./components/CartCount";
import CartPrice from "./components/CartPrice";
import RemoveItemButton from "./components/RemoveItemButton";
import CartContainer from "./components/CartContainer";

type Props = {
    item: IProduct;
    curCardCount: number;
};

const CardCart: FC<Props> = ({ item, curCardCount }) => {
    return (
        <CartContainer>
            <CartLink item={item} />
            <CartCount item={item} curCardCount={curCardCount} />
            <CartPrice item={item} />
            <RemoveItemButton item={item} />
        </CartContainer>
    );
};

export default memo(CardCart);
