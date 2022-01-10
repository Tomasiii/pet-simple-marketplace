import { FC, memo } from "react";
import { IProduct } from "../../../config/types/product";
import CartHomeContainer from "./components/CartHomeContainer";
import CartHomeLogo from "./components/CartHomeLogo";
import CartHomePrice from "./components/CartHomePrice";

const CardHome: FC<IProduct> = (item) => {
    return (
        <CartHomeContainer>
            <CartHomeLogo item={item} />
            <CartHomePrice item={item} />
        </CartHomeContainer>
    );
};

export default memo(CardHome);
