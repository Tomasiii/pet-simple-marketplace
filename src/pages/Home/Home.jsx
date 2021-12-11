import {useEffect} from "react";
import {useProductsState, useProductsDispatch} from '../../context/context.js'


function Home(){

    useEffect(() => {
//асинхронный запрос
    }, []);

    console.log()
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
