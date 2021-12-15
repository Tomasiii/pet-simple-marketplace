import { useProductsState } from "../../context/context";
import CardHome from "../../components/Card/CardHome/CardHome";
import style from "./home.module.scss";
import LoadingBlock from "../../components/Card/CardHome/LoadingBlock";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Spinner from "../../components/Spinner/Spinner";
import { memo } from "react";

const Home = () => {
    const { process, items } = useProductsState();

    const setContent = () => {
        const fackeArr = [...Array(20).keys()];

        switch (process) {
            case "loading":
                return fackeArr.map((item) => <LoadingBlock key={item} />);
            case "confirmed":
                return items.map((item) => <CardHome key={item.id} {...item} />);
            case "error":
                return <ErrorMessage />;
            default:
                return <Spinner />;
        }
    };
    const content = setContent(process, items);

    return (
        <section className={style.home}>
            <h2 className={style.home__title}>Все товары</h2>
            <div className={style.home__wrapper}>{content}</div>
        </section>
    );
};

export default memo(Home);
