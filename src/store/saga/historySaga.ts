import { takeLeading, put, call } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { IHistoryBodyArr } from "../../models/History";
import { HistoryActions } from "../../constants/history";
import { setHistory, setHistoryProcess } from "./actions";
import { axiosInstance } from "../../api/axios";
import URL from "../../constants/url";

function* historyWorker() {
    yield put(setHistoryProcess("loading"));
    try {
        const response: AxiosResponse<{ items: IHistoryBodyArr }> = yield call(
            async () => {
                return await axiosInstance.get(URL.getOrders);
            }
        );
        yield put(setHistory(response.data.items));
        yield put(setHistoryProcess("idle"));
    } catch (e) {
        yield put(setHistoryProcess("error"));
        throw new Error("Something went wrong (request error)");
    }
}

function* historyWatcher() {
    yield takeLeading(HistoryActions.INIT, historyWorker);
}

export function* historyRootSaga() {
    yield historyWatcher();
}
