import React, { memo, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.scss";
import logoSvg from "../../assets/img/olx-logo.png";
import CartSvg from "../../assets/svg/CartSvg";
import ROUTE_PATHS from "../../constants/routes";
import { useAppDispatch, useAppSelector } from "../../hooks/hooksHelpers";
import { sortSelector, totalPriceSelector } from "../../store/selectors";
import Modal from "../Modal/Modal";
import CreateProduct from "../Modal/childrens/CreateProduct/CreateProduct";
import fetchProducts from "../../store/thunks/getProducts";

const Header = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const sortObj = useAppSelector(sortSelector);
    const totalPrice = useAppSelector(totalPriceSelector);
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();

    useEffect(() => {
        dispatch(fetchProducts(sortObj));
    }, [dispatch, sortObj]);

    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <Link to={ROUTE_PATHS.HOME}>
                        <div className="header__logo">
                            <img src={logoSvg} alt="OLX logo" />
                        </div>
                    </Link>

                    <button onClick={() => setIsOpenModal(true)}>
                        create product
                    </button>
                    <Modal isOpen={isOpenModal} setIsOpen={setIsOpenModal}>
                        <CreateProduct />
                    </Modal>

                    <Link to={ROUTE_PATHS.CREATED_PRODUCTS}>created products</Link>

                    {pathname !== ROUTE_PATHS.CART && (
                        <Link to={ROUTE_PATHS.CART}>
                            <div className="header__cart">
                                <div className="header__cart__counter">
                                    <h2 className="header__cart__item">
                                        <CartSvg />
                                    </h2>
                                    <span className="header__black">
                                        {totalPrice}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
};

export default memo(Header);
