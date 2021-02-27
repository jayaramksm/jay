import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { action } from './redux_action';

function Redux_useselectorComponent () {
  const state =  useSelector(state=>state.addnumbers)
const dispatch =  useDispatch()
    return(
        <div> redux_useselector :{state}
            <button className="btn btn-secondary mt-3 mb-2" onClick={()=> dispatch(action())}> add</button>
        </div>
    )
}

export default Redux_useselectorComponent