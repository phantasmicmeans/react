import test from 'tape';
import { incrementAsync, delay } from "./sagas";
import { put, call } from "redux-saga/effects";

test('incrementAsync Saga test', (assert) => {
    const gen = incrementAsync()
    // incrementAsync is a generator function
    //gen.next() // => { done: boolean, value: result of calling delay(1000) }
    //gen.next() // => { done: false, value: result of calling put({type:'INCREMENT'})
    //gen.next() // => { done: true, value: undefined }

    assert.deepEqual(
        gen.next().value,
        call(delay, 1000),
        'incrementAsync Saga must call delay(1000)'
    )

    assert.deepEqual(
        gen.next().value,
        put({type: 'INCREMENT'}),
        'incrementAsync Saga must dispatch an INCREMENT action'
    )

    assert.deepEqual(
        gen.next(),
        { done: true, value: undefined },
        'incrementAsync Saga must be done'
    )

    assert.end()
});