import { FC, memo, useMemo } from "react";
import style from "./home.module.scss";
import LoadingBlock from "../../components/LoadingBlock/LoadingBlock";
import Spinner from "../../components/Spinner/Spinner";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import SortPopupPerPage from "../../components/SortPopup/SortPopupPerPage";
import SortPopupOrigin from "../../components/SortPopup/SortPopupOrigin";
import SortPopupPrice from "../../components/SortPopup/SortPopupPrice";
import PaginationBootstrap from "../../components/Pagination/Pagination";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { useGetAllProductsQuery } from "../../config/api/productsApi";

const Home: FC = () => {
    const { status } = useGetAllProductsQuery("products");

    const content = useMemo(() => {
        const keys = [...Array(20).keys()];

        switch (status) {
            case "pending":
                return keys.map((item) => <LoadingBlock key={item} />);
            case "fulfilled":
                return (
                    <div className="App">
                        <PaginationBootstrap key={"Pagination"} />
                    </div>
                );
            case "rejected":
                return <ErrorMessage />;
            default:
                return <Spinner />;
        }
    }, [status]);

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

export default memo(Home);
