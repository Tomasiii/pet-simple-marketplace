import {PATH_MAKER} from "../constants/api";

async function setAllProducrs(dispatch) {
    dispatch({type:'SET_PROCESS', payload: 'loading'});
    let response = await fetch(PATH_MAKER.BASE.PRODUCTS._);

    if (response.ok) {
        let allProducts = await response.json();
        dispatch({type:'ADD_ALL_PRODUCTS', payload: allProducts})
        dispatch({type:'SET_PROCESS', payload: 'confirmed'});
    } else {
        dispatch({type:'SET_PROCESS', payload: 'error'});
        // throw new Error("Ошибка HTTP: " + response.status);
    }
}

export {setAllProducrs}
