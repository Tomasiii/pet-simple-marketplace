import { memo, useMemo } from "react";
import style from "./home.module.scss";
import style2 from "../../components/Card/CardHome/cardHome.module.scss";
import LoadingBlock from "../../components/Card/CardLoadingBlock/LoadingBlock";
import ErrorMessage from "../../components/ErrorBoundary/ErrorMessage/ErrorMessage";
import Spinner from "../../components/Spinner/Spinner";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import { processSelector } from "../../store/selectors";
import { useAppSelector } from "../../hooks/hooksHelpers";
import SortPopupPerPage from "../../components/SortPopup/SortPopupPerPage";
import SortPopupOrigin from "../../components/SortPopup/SortPopupOrigin";
import SortPopupPrice from "../../components/SortPopup/SortPopupPrice";
import Pagination from "../../components/Pagination/Pagination";
import CardHome from "../../components/Card/CardHome/CardHome";

const Home = () => {
    const process = useAppSelector(processSelector);

    const content = useMemo(() => {
        const fakeArr = [...Array(20).keys()];

        switch (process) {
            case "loading":
                return <Spinner />;
            case "waiting":
                return fakeArr.map((item) => (
                    <LoadingBlock key={item} className={style2.card} />
                ));
            case "idle":
                return (
                    <div className="App">
                        <Pagination
                            key={"Pagination"}
                            isEditable={null}
                            Card={CardHome}
                        />
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
                    <h2 className={style.home__title}>All products</h2>
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
