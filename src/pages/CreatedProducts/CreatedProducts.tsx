import { memo, useEffect, useMemo } from "react";
import style from "./createdProducts.module.scss";
import LoadingBlock from "../../components/Card/CardHome/LoadingBlock";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Spinner from "../../components/Spinner/Spinner";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import { processSelector, sortSelector } from "../../store/selectors";
import { useAppDispatch, useAppSelector } from "../../hooks/hooksHelpers";
import SortPopupPerPage from "../../components/SortPopup/SortPopupPerPage";
import SortPopupOrigin from "../../components/SortPopup/SortPopupOrigin";
import SortPopupPrice from "../../components/SortPopup/SortPopupPrice";
import PaginationBootstrap from "../../components/Pagination/PaginationBootstrap";
import fetchProducts from "../../store/thunks/getProducts";

const CreatedProducts = () => {
    const process = useAppSelector(processSelector);
    const sortObj = useAppSelector(sortSelector);
    const dispatch = useAppDispatch();

    const content = useMemo(() => {
        const fakeArr = [...Array(20).keys()];

        switch (process) {
            case "loading":
                console.log("loading");
                return <Spinner />;
            case "waiting":
                return fakeArr.map((item) => <LoadingBlock key={item} />);
            case "idle":
                return (
                    <div className="App">
                        <PaginationBootstrap key={"Pagination"} />
                    </div>
                );
            case "error":
                return <ErrorMessage />;
            default:
                return <Spinner />;
        }
    }, [process]);

    useEffect(() => {
        dispatch(fetchProducts(sortObj));
    }, [dispatch, sortObj]);

    return (
        <ErrorBoundary>
            <section className={style.home}>
                <div className={style.home__header} key="sortGroup">
                    <h2 className={style.home__title}>Все товары</h2>
                    <SortPopupPrice />
                    <SortPopupOrigin />
                    <SortPopupPerPage />
                </div>
                <div>{content}</div>
            </section>
        </ErrorBoundary>
    );
};

export default memo(CreatedProducts);
