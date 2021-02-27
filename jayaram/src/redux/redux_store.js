import { applyMiddleware, createStore } from "redux"
import {reducer} from "./redux_reducer"
import {logger} from "redux-logger"
import { composeWithDevTools } from 'redux-devtools-extension';
export const creatstore = createStore(reducer,applyMiddleware(logger))