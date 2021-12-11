// import {PATH_MAKER} from "../constants/api";
// import {useProductsDispatch} from "../context/context";
//
// async function setAllProducrs() {
//     const dispatch = useProductsDispatch();
//     let response = await fetch(PATH_MAKER.BASE.PRODUCTS._);
//
//     if (response.ok) {
//         let allProducts = await response.json();
//         dispatch({'type':'ADD_ALL_PRODUCTS', 'payload': allProducts})
//     } else {
//         throw new Error("Ошибка HTTP: " + response.status);
//     }
// }
//
// export {setAllProducrs}
