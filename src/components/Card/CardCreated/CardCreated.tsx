import style from "./cardCreated.module.scss";
import { Link } from "react-router-dom";
import React, { FC, memo, useState } from "react";
import ROUTE_PATHS from "../../../constants/routes";
import { IProduct } from "../../../models/Product";
import Modal from "../../Modal/Modal";
import EditProduct from "../../Modal/childrens/name-price-origins/EditProduct/EditProduct";
import { originsOptions } from "../../../constants/SortOptions";

const CardCreated: FC<IProduct> = (item) => {
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const [card, setCard] = useState<IProduct>(item);

    return (
        <>
            <div className={style.card}>
                <Link to={`${ROUTE_PATHS.PRODUCTS}${card.id}`}>
                    <img
                        className={style.card__img}
                        src="https://img.fozzyshop.com.ua/68845-large_default/napitok-coca-cola-banka.jpg"
                        alt="goods"
                    />
                    <p className={style.card__title}>
                        {card.name}
                        <br />
                        <span>Made in {card.origin}</span>
                    </p>
                </Link>
                <div className={style.card__price}>
                    <div className={style.card__buy}>
                        <div>
                            Price:
                            <br />
                            <span>{card.price} $</span>
                        </div>
                        <div>
                            <button
                                className={style.card__buy__button}
                                onClick={() => setIsOpenModal(true)}
                            >
                                Edit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal isOpen={isOpenModal} setIsOpen={setIsOpenModal}>
                <EditProduct
                    defaultValuesProps={{
                        name: card.name,
                        price: card.price.toString(),
                        origin: originsOptions.find(
                            (item) => item.value === card.origin
                        ) ?? {
                            label: "",
                            value: ""
                        }
                    }}
                    id={card.id}
                    setIsOpen={setIsOpenModal}
                    setCard={setCard}
                />
            </Modal>
        </>
    );
};

export default memo(CardCreated);
