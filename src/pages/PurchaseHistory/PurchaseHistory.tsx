import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import { Link } from "react-router-dom";
import cartEmptyImage from "../../assets/img/empty-cart.png";
import ROUTE_PATHS from "../../constants/routes";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooksHelpers";
import fetchHistory from "../../store/thunks/getHistory";
import { historySelector } from "../../store/selectors/historySelector";
import CardHistory from "../../components/Card/CardHistory/CardHistory";
import "./purchaseHistory.scss";

const PurchaseHistory = () => {
    const { history } = useAppSelector(historySelector);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchHistory());
    }, [dispatch]);

    return (
        <ErrorBoundary>
            <div className="container container--cart">
                {history?.length ? (
                    <div className="cart">
                        <div className="content__items">
                            {history
                                ?.map((item) => (
                                    <CardHistory key={item.id} history={item} />
                                ))
                                .reverse()}
                        </div>
                    </div>
                ) : (
                    <div className="cart cart--empty">
                        <h2>
                            Заказов ещё не было <i>😕</i>
                        </h2>
                        <p>
                            Вероятней всего, вы не заказывали ещё товары.
                            <br />
                            Для того, чтобы заказать, перейди на главную страницу.
                        </p>
                        <img src={cartEmptyImage} alt="Empty cart" />
                        <Link to={ROUTE_PATHS.HOME} className="button button--black">
                            <span>Вернуться на главную страницу</span>
                        </Link>
                    </div>
                )}
            </div>
        </ErrorBoundary>
    );
};

export default PurchaseHistory;
