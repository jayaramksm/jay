import { all, call,put, takeEvery, takeLatest,take,cps,race,select } from "redux-saga/effects"
import { API_CALL ,LOADING ,POST} from "./react-redux/type"
import axios from 'axios'
import { dispatch, saga_action ,post_success} from "./react-redux/action"
function  apicall(data) {
    return (
      axios.post('http://localhost:4200/employees',data)
    )
    
  }

 function* worker(action) {
  
   console.log("action in worker",action)
  //  const data = yield call(apicall)
    // const data = yield call( axois.get,'http://localhost:4200/employees')
    const data = yield call( axios.get,action.url)
   
    yield put (saga_action(data))
 }

function* postsaga(action){
  console.log('post methode action ', action.payload.id)
  // yield call(axios.post,"http://localhost:4200/employees/", action.payload)
  // yield call(axios.post,'http://localhost:4200/employees', action.payload)
  //  yield call(axios.put, 'http://localhost:4200/employees/'+ action.payload.id, action.payload)
  // yield call(axios.delete, 'http://localhost:4200/employees/'+ 2, action.payload)
    yield put (post_success(action.payload))
}


 export default function* actionWatcher() {
   console.log('actionWatcher')
   yield race ([
   yield takeEvery(LOADING,worker),
   yield takeLatest(POST,postsaga),
  ])

  yield takeEvery('*', function* logger(action) {
    const state = yield select()

    console.log('takeevery * action ', action)
    console.log('state after *', state)
  })

}





//  function * worker() {
//     const data = yield call(apicall)
//     console.log(data)
//     yield put ({type:LOADING,data})
// }

// export default function* rootSaga() {
//     yield all([
//     actionWatcher(),
//     ]);
//  }

 


// function* fetchProducts() {
//     try {
//       const products = yield call(Api.fetch, '/products')
//       yield put({ type: 'PRODUCTS_RECEIVED', products })
//     }
//     catch(error) {
//       yield put({ type: 'PRODUCTS_REQUEST_FAILED', error })
//     }
//   }  |   let res = yield call(Axios.put, 'http://localhost:3000/todosLIst/'+ action.payload.id, action.payload )   |   yield put(completed_todo_success()