import { spawn } from "redux-saga/effects";
import { historyRootSaga } from "./history";

export default function* RootSaga() {
    // const sagas = [historyRootSaga];

    // const retrySagas = yield sagas.map((saga) => {
    //     return spawn(function* () {
    //         while (true) {
    //             try {
    //                 yield call(saga);
    //             } catch (e) {
    //                 console.log(e);
    //             }
    //         }
    //     });
    // });

    // yield all(retrySagas);
    yield spawn(historyRootSaga);
}
