import React,{useState}from 'react'
import './ParentForwardref.css';
 function Usestatehook() {
    const [count,setCount] = useState(1)
    return (
        <div className="usestate">
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <button>{count}</button><div>&nbsp;</div>
            <button onClick={()=>setCount(prevCount=>prevCount+1)}>INCREMENTBY1</button><div>&nbsp;</div>
            <button onClick={()=>setCount(prevCount=>prevCount+5)}>INCREMENTBY5</button><div>&nbsp;</div>
            <button onClick={()=>setCount(prevCount=>prevCount*20)}>MULTIPLYBY20</button>
            <button onClick={()=>setCount(prevCount=>prevCount-1)}>DECREMENTBY1</button><div>&nbsp;</div>
            <button onClick={()=>setCount(prevCount=>prevCount-5)}>DECREMENTBY5</button><div>&nbsp;</div>
            <button onClick={()=>setCount(prevCount=>prevCount/20)}>DIVIDEDBY5</button>
            <button onClick={()=>setCount(prevCount=>prevCount*0)}>RESETVALUE</button>
            
            
        </div>
    )
}

export default  Usestatehook;