import React, { FC, memo, ReactNode } from "react";
import style from "../cardHome.module.scss";

type Props = {
    children: ReactNode;
};

const CartHomeContainer: FC<Props> = ({ children }: Props) => {
    return <div className={style.card}>{children}</div>;
};

export default memo(CartHomeContainer);
