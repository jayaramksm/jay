import React, { useReducer } from 'react';
const initailvalue = 0;
const initailstate = {fname:"",lname:""}
// const reducertwo = (state,action)=>{
//     switch(action.type){
//         case ""
//     }
// }
const reducer = (state,action)=>{

    switch(action) {
        case 'increment':
         return state + 1;
            case 'setfname':
        case 'decrement':
            return state - 1;
          
        default:
            return state
}
}
function UsereducerComponent(){
    const [state, dispatch] =useReducer(reducer,initailvalue)
  const  handleclick = ()=>{dispatch('increment') } 
    return(
        <div>
            count : {state}
            <button className="btn btn-primary" onClick={handleclick}>increment</button>
            <button className="btn btn-primary" onClick={()=>dispatch('decrement')}>increment</button>
        </div>
    )
}

export default UsereducerComponent