// import { useState } from "react";
import React , {useState} from 'react';
import Objecthook, { Mcontext } from './objectusestatehook';

function Usesatate(props) {
    setTimeout(()=>{
        console.log(props)
        props.history.push('/')
        // after 2 seconds Navigator to home
    },2000)
    const [count,setCount] = useState(0)
    const initail = 0;
    
    const [counts,setstate] = useState(initail)
     const incrementfive = ()=>{
         setstate(prevCount =>prevCount + 5)
     }
return(
<div>
   
    <h1 className="text-center text-danger"> usestate hook </h1>
    <div>
<button onClick={()=>setCount(count + 1)}> count {count}</button>
</div>
<div>
    <span className="text-danger">count : {counts}</span>

<button onClick={()=>setstate(initail)}> reset </button>
<button onClick={()=>setstate(counts + 1 )}> add </button>
<button onClick={()=>setstate(counts - 1)}> dicriment </button>
<button onClick={incrementfive}> increment 5  </button>
</div>
<h1 className="text-danger">objectusesatehook 
<Objecthook/>
</h1>
</div>
)
}

export default  Usesatate;