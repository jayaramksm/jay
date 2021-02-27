
import React from 'react';
import { createStore,applyMiddleware } from 'redux';
import PrimarySearchAppBar from '../my-project/header';
import Navbar from '../my-project/nav';
import Connect from '../react_hooks/reduxchild';
import Redux_providerComponent from './redux_provider';
import createSagaMiddleware from 'redux-saga'
import { api, helloSaga } from './redux_saga/firstsaga';
import Redux_sagaproviderComponent from '../saga_react-redux/react-redux/provider';
const sagaMiddleware = createSagaMiddleware()
const initialState = {
    count: 0,
    data : '',
  };

 const addToCartReducer = (state = initialState, action) => {
    switch (action.type) {
       case 'Incriment' :
          return {
             ...state,
             count:state.count + 1
          }
          case 'callapi' :
             return{
               ...state,
               data:action.payload
             }
       default:
          return state;
    }
 }

 function action (){
    return{
       type:'callapi',
    }
 }

 function logger({ getState }) {
   return next => action => {
      console.log('action', action);
      const returnVal = next(action);
      console.log('state when action is dispatched', getState()); 
      return returnVal;
   }
}
export const React_store = createStore(addToCartReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(api)
function ReduxComponent (){

console.log("redux-store",React_store.getState())

React_store.dispatch({ type: "Incriment" });
React_store.dispatch({ type: "Incriment" });
React_store.dispatch({ type: "callapi",payload : "hdgeutwr" });
React_store.dispatch({ type: "Incriment" });

React_store.subscribe(()=>{console.log("subscribe",React_store.getState());});

// unsubscribe();
// store.dispatch({ type: "DECREMENT" });
// store.dispatch({ type: "RESET" });
return(
   <div className="text-center">
      <PrimarySearchAppBar/>
      <Navbar/>
<button className="btn btn-primary mb-3 mt-2" onClick={()=>React_store.dispatch({ type: "Incriment" }) }>click</button>
{console.log("rerender",React_store.getState())}
<Redux_providerComponent/>
<Redux_sagaproviderComponent/>

</div>
)

}

export default ReduxComponent