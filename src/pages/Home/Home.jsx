import { memo } from "react";
import CardHome from "../../components/Card/CardHome/CardHome";
import style from "./home.module.scss";
import LoadingBlock from "../../components/Card/CardHome/LoadingBlock";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Spinner from "../../components/Spinner/Spinner";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import Pagination from "../../components/Pagination/Pagination";
import { useSelector } from "react-redux";
import productsSelector from "../../store/selectors/productsSelector";

const Home = () => {
    const { process, items } = useSelector(productsSelector);

    const setContent = () => {
        const fakeArr = [...Array(20).keys()];

        switch (process) {
            case "waiting":
                return fakeArr.map((item) => <LoadingBlock key={item} />);
            case "idle":
                return (
                    <Pagination
                        className={style.home__wrapper}
                        key={"Pagination"}
                        items={items}
                        ViewComponent={CardHome}
                    />
                    // <div>working</div>
                );
            case "error":
                return <ErrorMessage />;
            default:
                return <Spinner />;
        }
    };
    const content = setContent(process, items);

    return (
        <ErrorBoundary>
            <section className={style.home}>
                <h2 className={style.home__title}>Все товары</h2>
                <div>{content}</div>
            </section>
        </ErrorBoundary>
    );
};

export default memo(Home);
