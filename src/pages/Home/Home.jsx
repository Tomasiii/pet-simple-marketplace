import {useEffect} from "react";
import {useProductsState, useProductsDispatch} from '../../context/context.js'
import {setAllProducrs} from "../../api/apiRequests";
import Card from "../../components/Card/Card";
import style from './home.module.scss';
import LoadingBlock from "../../components/Card/LoadingBlock";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";

function Home() {
    let {items, process} = useProductsState();
    const dispatch = useProductsDispatch();

    useEffect(() => {
        setAllProducrs(dispatch);
    }, [dispatch]);

    const setContent = (process) => {
        switch (process) {
            case 'loading':
                const fackeArr = [...Array(20).keys()];
                return fackeArr.map(item => <LoadingBlock key={item}/>)
            case 'confirmed':
                return items.map(item => <Card key={item.id} {...item}/>)
            case 'error':
                return <ErrorMessage/>
        }
    }
    let content = setContent(process, items);

    return (
        <ErrorBoundary>
            <section className={style.home}>
                <h2 className={style.home__title}>All products</h2>
                <div className={style.home__wrapper}>
                    {content}
                </div>
            </section>
        </ErrorBoundary>
    )
}

export default Home;
