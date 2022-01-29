import { takeLeading, put, call } from "redux-saga/effects";
import { fetchHistorySaga } from "../thunks/getHistory";
import { setHistory } from "../slices";
import { AxiosResponse } from "axios";
import { IHistoryBodyArr } from "../../models/History";

function* historyWorker() {
    const response: AxiosResponse<{ items: IHistoryBodyArr }> = yield call(
        fetchHistorySaga
    );
    yield put(setHistory(response.data.items));
}

function* historyWatcher() {
    yield takeLeading("INIT", historyWorker);
}

export function* historyRootSaga() {
    yield historyWatcher();
}
