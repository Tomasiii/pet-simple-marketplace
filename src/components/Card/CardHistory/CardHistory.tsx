import style from "./cardHistory.module.scss";
import React, { FC, memo, useState } from "react";
import { IHistoryBody } from "../../../models/History";
import Modal from "../../Modal/Modal";
import HistoryProductsDetail from "../../Modal/childrens/card_detail/HistoryProductsDetail/HistoryProductsDetail";

interface IProps {
    history: IHistoryBody;
}

const CardHistory: FC<IProps> = ({ history }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { createdAt, pieces } = history;
    const data = new Date(createdAt);
    const priceOfOrder = pieces.reduce(
        (sum, current) => (sum += current.count * current.product.price),
        0
    );

    return (
        <>
            <div className={style.card} onClick={() => setIsOpen(true)}>
                <div className={style.card__product}>
                    <img
                        className={style.card__img}
                        src="https://img.fozzyshop.com.ua/68845-large_default/napitok-coca-cola-banka.jpg"
                        alt="goods"
                    />
                    <p className={style.card__title}>
                        {data.toLocaleString()}
                        <br />
                        <span>Done</span>
                    </p>
                </div>
                <div className={style.card__price}>
                    <div>
                        Total:
                        <br />
                        <span>{priceOfOrder} $</span>
                    </div>
                </div>
            </div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                <HistoryProductsDetail orderDetails={pieces} />
            </Modal>
        </>
    );
};

export default memo(CardHistory);
