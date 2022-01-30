import { spawn } from "redux-saga/effects";
import { historyRootSaga } from "./historySaga";

export default function* RootSaga() {
    yield spawn(historyRootSaga);
}
