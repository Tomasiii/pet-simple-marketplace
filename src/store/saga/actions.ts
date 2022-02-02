import { createAction, PayloadActionCreator } from "@reduxjs/toolkit";
import { HistoryActions } from "../../constants/history";
import { IHistoryBodyArr } from "../../models/History";

export const initHistory: PayloadActionCreator<null, HistoryActions.INIT> =
    createAction(HistoryActions.INIT);
export const setHistory: PayloadActionCreator<
    IHistoryBodyArr,
    HistoryActions.FETCH
> = createAction(HistoryActions.FETCH);
export const setHistoryProcess: PayloadActionCreator<
    "loading" | "idle" | "error",
    HistoryActions.SET_PROCESS
> = createAction(HistoryActions.SET_PROCESS);
