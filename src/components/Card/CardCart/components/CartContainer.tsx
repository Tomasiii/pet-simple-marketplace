import React, { FC, memo, ReactNode } from "react";
import style from "../cardCart.module.scss";

type Props = {
    children: ReactNode;
};
const CartContainer: FC<Props> = ({ children }: Props) => {
    return <div className={style.card}>{children}</div>;
};

export default memo(CartContainer);
