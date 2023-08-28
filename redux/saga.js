import { SET_USER_Data, USER_LIST } from "./constants";
import {takeEvery,put} from 'redux-saga/effects'

function* userList() {
    const url = 'https://dummyjson.com/users';
    let data = yield fetch(url);
    data = yield data.json();
    console.warn(data);
    yield put({type:SET_USER_Data,data})
}
function* sagaData() {
    yield takeEvery(USER_LIST,userList)
}
export default sagaData;
