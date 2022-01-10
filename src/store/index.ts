import { loadState, saveState } from "../storage/browser-storage";
import { productsApi } from "../config/api/productsApi";
import { configureStore } from "@reduxjs/toolkit";
import products from "./slices/productsSlice";
import sort from "./slices/sortSlice";
import { debounce } from "lodash";

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        products,
        sort
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
    preloadedState: loadState()
});

store.subscribe(
    debounce(async () => {
        await saveState(store.getState());
    }, 800)
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
