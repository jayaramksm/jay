import React,{useReducer} from 'react'

const initialState = 0
const reducer = (state,action) =>{
         switch (action) {
            case 'increment':
                return    state+1
            case 'decrement':
                return    state-1
            case 'reset':
                return    state*0                
              
        
             default:
                return state;
         }
 }

function UseReducerHook() {
    const [count,disptach] = useReducer(reducer,initialState)
    return (
        <div>
            <div>{count}</div>
            <button onClick={()=>disptach('increment')}>increment</button>
            <button onClick={()=>disptach('decrement')}>decrement</button>
            <button onClick={()=>disptach('reset')}>reset</button>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
        </div>
    )
}

export default UseReducerHook
