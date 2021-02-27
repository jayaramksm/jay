import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { select } from 'redux-saga/effects';
import { dispatch ,action_post} from "./action"
function Usehooks_saga(params) {
    const state = useSelector(select=> select.api_data)
    console.log("state use selectoe",state)
    const dispatchS = useDispatch()
    const send =  {
            "firstName": "lokesh kk",
            "lastName": "kasim",
            "email": "naresh@gmail.com",
            "password": "naresh@",
            "confirmPassword": "naresh@",
            "id": 8
          }
    // dispatchS(action_post(send))
    return(
        <div>
     <button className="btn btn-secondary mt-3 mb-2" onClick={()=> dispatchS(action_post(send))}> data  </button>
    
            <button className="btn btn-secondary mt-3 mb-2" onClick={()=> dispatchS(dispatch())}> usehooks </button>
            {state && state.data.map((val)=>{
                  return (
                    <tr className="table  " key={val.id}>
                        <td>{val.id}</td>
                        <td>{val.firstName}</td>
                        <td>{val.lastName}</td>
                        <td>{val.email}</td>
                        <td>{val.password}</td>
                    </tr>
                )
             })}
        </div>
    )
}

export default Usehooks_saga