import {useEffect} from "react";
import {useProductsState, useProductsDispatch} from '../../context/context.js'
import {PATH_MAKER} from "../../constants/api";

// import {setAllProducrs} from "../../api/apiRequests";


function Home() {
    const dispatch = useProductsDispatch();

    useEffect(() => {
        const setAllProducrs = async () => {
            let response = await fetch(PATH_MAKER.BASE.PRODUCTS._);

            if (response.ok) {
                let allProducts = await response.json();
                dispatch({'type': 'ADD_ALL_PRODUCTS', 'payload': allProducts})
            } else {
                throw new Error("Ошибка HTTP: " + response.status);
            }
        }
        setAllProducrs();
    }, [PATH_MAKER.BASE.PRODUCTS._]);

    return (
        <section className="home">
            <div className="container">
                <div className="home__wrapper">

                </div>
            </div>
        </section>
    )
}

export default Home;
