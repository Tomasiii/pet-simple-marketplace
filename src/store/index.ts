import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import RootSaga from "./saga";
import products from "./slices/productsSlice";
import sort from "./slices/sortSlice";
import history from "./saga/historyReducer";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: { products, sort, history },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
    devTools: process.env.NODE_ENV !== "production"
});

sagaMiddleware.run(RootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
