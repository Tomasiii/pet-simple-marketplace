import React, { useEffect, useMemo } from "react";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import { Link } from "react-router-dom";
import cartEmptyImage from "../../assets/img/empty-cart.png";
import ROUTE_PATHS from "../../constants/routes";
import { useAppDispatch, useAppSelector } from "../../hooks/hooksHelpers";
import { historySelector } from "../../store/selectors/historySelector";
import CardHistory from "../../components/Card/CardHistory/CardHistory";
import "./purchaseHistory.scss";
import { initHistory } from "../../store/saga/actions";
import Spinner from "../../components/Spinner/Spinner";
import ErrorMessage from "../../components/ErrorBoundary/ErrorMessage/ErrorMessage";

const PurchaseHistory = () => {
    const { history, process } = useAppSelector(historySelector);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(initHistory(null));
    }, [dispatch]);

    const content = useMemo(() => {
        switch (process) {
            case "loading":
                return <Spinner />;
            case "idle":
                return (
                    <ErrorBoundary>
                        <div className="container container--cart">
                            {history?.length ? (
                                <div className="cart">
                                    <div className="content__items">
                                        {history
                                            ?.map((item) => (
                                                <CardHistory
                                                    key={item.id}
                                                    history={item}
                                                />
                                            ))
                                            .reverse()}
                                    </div>
                                </div>
                            ) : (
                                <div className="cart cart--empty">
                                    <h2>
                                        ?????????????? ?????? ???? ???????? <i>????</i>
                                    </h2>
                                    <p>
                                        ?????????????????? ??????????, ???? ???? ???????????????????? ?????? ????????????.
                                        <br />
                                        ?????? ????????, ?????????? ????????????????, ?????????????? ???? ??????????????
                                        ????????????????.
                                    </p>
                                    <img src={cartEmptyImage} alt="Empty cart" />
                                    <Link
                                        to={ROUTE_PATHS.HOME}
                                        className="button button--black"
                                    >
                                        <span>?????????????????? ???? ?????????????? ????????????????</span>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </ErrorBoundary>
                );
            case "error":
                return <ErrorMessage />;
            default:
                return <Spinner />;
        }
    }, [process]);

    return <>{content}</>;
};

export default PurchaseHistory;
