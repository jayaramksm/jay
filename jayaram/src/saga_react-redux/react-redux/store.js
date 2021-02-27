import { applyMiddleware, createStore } from "redux";
import { Reducer_saga } from "./reducer";
import createSagaMiddleware from 'redux-saga'
import actionWatcher from "../mainsaga";
import { composeWithDevTools } from 'redux-devtools-extension';
// import { Worker } from "./saga_react-redux/mainsaga";
const sagaMiddleware = createSagaMiddleware()

export const Redux_store = createStore(Reducer_saga,composeWithDevTools(applyMiddleware(sagaMiddleware)))
// Sagemiddleware.run(worker)
sagaMiddleware.run(actionWatcher)