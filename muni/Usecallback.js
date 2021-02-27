import React,{useState,useCallback} from 'react'
import './ParentForwardref.css';
function Usecallback() {

    const [value,setValue] = useState(1)
    const [amount,setAmount] = useState(0)
    const incrementvalue = useCallback(()=>{
        setValue(value+1)
    },[value])
    const incrementamount = useCallback(()=>{
        setAmount(amount+1)
    },[amount])

    
    return (
        <div className="usecallback">
             <button>{value}</button>
             <div>&nbsp;</div>
            <button onClick={incrementvalue}>incrementvalue</button>
            <div>&nbsp;</div>
            <button>{amount}</button>
            <div>&nbsp;</div>
            <button onClick={incrementamount}>incrementamount</button>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
        </div>
    )
}

export default Usecallback
