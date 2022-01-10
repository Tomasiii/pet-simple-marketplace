import React, { FC, memo, useCallback } from "react";
import { IProduct } from "../../../../config/types/product";
import style from "../cardCart.module.scss";
import { useAppDispatch } from "../../../../hooks/hooksHelpers";
import { cleaningCartItem } from "../../../../store/slices";

type Props = {
    item: IProduct;
};

const RemoveItemButton: FC<Props> = ({ item }: Props) => {
    const dispatch = useAppDispatch();

    const removeItemGroup = useCallback(
        () => dispatch(cleaningCartItem(item)),
        [item]
    );

    return (
        <div className={style.card__delete} onClick={removeItemGroup}>
            <i className="far fa-times-circle" />
        </div>
    );
};

export default memo(RemoveItemButton);
