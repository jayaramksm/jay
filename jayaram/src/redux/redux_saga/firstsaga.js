import { put, takeEvery, all, call } from 'redux-saga/effects'
import axois from 'axios'
const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* helloSagas() {
  console.log('Hello Sagas!')
}

function* incrementAsync() {
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}

function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    helloSagas(),
    watchIncrementAsync()
  ])
}

function  apicall() {
  return (
    axois.get('http://localhost:4200/employees')
  )
  
}

  export  function* api() {
  yield delay(1000)
  const data = yield call (apicall)
  console.log("api data",data)
  yield put({ type: 'callapi' ,payload : data})
}

export function* helloSaga() {
    console.log('Hello Sagas!')
  }