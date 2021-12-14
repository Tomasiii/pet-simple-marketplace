import { useProductsState } from "../../context/context";
import Card from "../../components/Card/Card";
import style from "./home.module.scss";
import LoadingBlock from "../../components/Card/LoadingBlock";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Spinner from "../../components/Spinner/Spinner";

const Home = () => {
    const { items, process } = useProductsState();

    const setContent = () => {
        const fackeArr = [...Array(20).keys()];

        switch (process) {
            case "loading":
                return fackeArr.map((item) => <LoadingBlock key={item} />);
            case "confirmed":
                return items.map((item) => <Card key={item.id} {...item} />);
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

export default Home;
