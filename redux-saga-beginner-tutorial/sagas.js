import { put, takeEvery, call, all } from "redux-saga/effects";

export const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export function* helloSaga() {
    console.log('Hello Sagas!')
}

// worker Saga: will perform the async increment task
export function* incrementAsync() {
    yield call(delay, 1000) // promise resolve 될 때까지 기다림
    yield put({ type: 'INCREMENT' }) // dispatch INCREMENT action
    // put: instructs the middleware to dispatch an INCREMENT action.
    /* put은 Effect 중 하나
        middleware가 Effect yield를 retrives하면
        saga는 Effect가 이행될때까지 기다림
     */
}

export function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

// 위의 2가지 saga를 한번에 실행시킴 - rootSaga의 책임이라고 보면 됨
// parallel로 실행
export default function* rootSaga() {
    yield all([
        helloSaga(),
        watchIncrementAsync()
    ])
}
// saga는 generator function을 실행
