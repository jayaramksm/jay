import React ,{useContext}from 'react'
import {usercontext} from './Contexthook';


function Childcontexthook() {
    const user = useContext(usercontext);
    
    return (
        <div>
           <h1>WELCOME TO <span color="red"><u>{user}</u></span></h1> 
        </div>
    )
}

export default Childcontexthook
