import {put, select, takeEvery} from "redux-saga/effects";
import {CLEAR, LOG_IN} from "../constants";
import userFixtures from "../userFixtures";
import {setCurrentUser} from "../actions/users/profile";

export function* authSaga() {

    const {email, password} = yield select(state => state.signIn);

    console.log("EMAIL: ", email);
    console.log("PASSWORD: ", password);

    const userList = userFixtures;
    const user = userList.find((user) => user.email === email && user.password === password);

    console.log("USER: ", user);

    if (user) {
        yield put(setCurrentUser(user));
    }

    yield put({type: CLEAR});
}

export function* watchAuthSaga() {
    yield takeEvery(LOG_IN, authSaga);
}