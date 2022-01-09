import { memo, useMemo } from "react";
import style from "./home.module.scss";
import LoadingBlock from "../../components/Card/CardHome/LoadingBlock";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Spinner from "../../components/Spinner/Spinner";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import { processSelector } from "../../store/selectors";
import { useAppSelector } from "../../hooks/hooksHelpers";
import SortPopupPerPage from "../../components/SortPopup/SortPopupPerPage";
import SortPopupOrigin from "../../components/SortPopup/SortPopupOrigin";
import SortPopupPrice from "../../components/SortPopup/SortPopupPrice";
import PaginationBootstrap from "../../components/Pagination/PaginationBootstrap";

const Home = () => {
    const process = useAppSelector(processSelector);

    const content = useMemo(() => {
        const fakeArr = [...Array(20).keys()];

        switch (process) {
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
