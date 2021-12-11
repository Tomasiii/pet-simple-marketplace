import {useEffect} from "react";
import {useProductsState, useProductsDispatch} from '../../context/context.js'


function Home(){

    useEffect(async () => {
        const allProducts = await fetch()
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
