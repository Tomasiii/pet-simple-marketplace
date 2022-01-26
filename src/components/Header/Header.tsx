import React, { memo, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooksHelpers";
import { omitTotalPriceSelector, totalPriceSelector } from "../../store/selectors";
import style from "./header.module.scss";
import LogoSvg from "../../assets/img/olx-logo.png";
import Purchase from "../../assets/svg/purchase-order.svg";
import CartSvg from "../../assets/svg/CartSvg";
import ROUTE_PATHS from "../../constants/routes";
import Modal from "../Modal/Modal";
import CreateProduct from "../Modal/childrens/name-price-origins/CreateProduct/CreateProduct";
import fetchProducts from "../../store/thunks/getProducts";

const Header = () => {
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const sortObj = useAppSelector(omitTotalPriceSelector);
    const totalPrice = useAppSelector(totalPriceSelector);
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();

    useEffect(() => {
        dispatch(fetchProducts(sortObj));
    }, [dispatch, sortObj]);

    return (
        <header className={style.header}>
            <div>
                <div className={style.header__wrapper}>
                    <Link to={ROUTE_PATHS.HOME}>
                        <div className={style.header__logo}>
                            <img src={LogoSvg} alt="OLX logo" />
                        </div>
                    </Link>

                    {pathname !== ROUTE_PATHS.CART && (
                        <>
                            {pathname !== ROUTE_PATHS.PURCHASE_HISTORY && (
                                <>
                                    <button
                                        onClick={() => setIsOpenModal(true)}
                                        className={style.header__nav_route}
                                    >
                                        Create product
                                    </button>
                                    <Modal
                                        isOpen={isOpenModal}
                                        setIsOpen={setIsOpenModal}
                                    >
                                        <CreateProduct setModal={setIsOpenModal} />
                                    </Modal>

                                    <Link to={ROUTE_PATHS.CREATED_PRODUCTS}>
                                        <div className={style.header__nav_route}>
                                            Created products
                                        </div>
                                    </Link>
                                </>
                            )}

                            <Link to={ROUTE_PATHS.CART}>
                                <div className={style.header__cart}>
                                    <div className={style.header__cart__counter}>
                                        <h2 className={style.header__cart__item}>
                                            <CartSvg />
                                        </h2>
                                        <span className={style.header__nav_price}>
                                            {totalPrice}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </>
                    )}

                    {pathname === ROUTE_PATHS.CART && (
                        <Link to={ROUTE_PATHS.PURCHASE_HISTORY}>
                            <>
                                <span className={style.history__label}>
                                    History{" "}
                                </span>
                                <img
                                    src={Purchase}
                                    alt="History"
                                    className={style.history}
                                />
                            </>
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
};

export default memo(Header);
