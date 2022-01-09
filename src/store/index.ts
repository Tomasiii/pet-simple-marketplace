import { configureStore } from "@reduxjs/toolkit";
import products from "./slices/productsSlice";
import sort from "./slices/sortSlice";

export const store = configureStore({
    reducer: { products, sort },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== "production"
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
