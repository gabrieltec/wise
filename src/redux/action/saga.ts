import { put, takeLatest, all } from "redux-saga/effects";
import axios from "axios";
const runOurAction = function* () {
  let remoteData;
    remoteData = {user: 'gabriel', email: 'gabriel@hotmail.com'};
  yield put({ type: "SET_DATA", payload: remoteData });
};
function* getAsyncDataWatcher() {
  yield takeLatest("GET_ASYNC_DATA", runOurAction);
}

export default function* rootSaga() {
  yield all([getAsyncDataWatcher()]);
}