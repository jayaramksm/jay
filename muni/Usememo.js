import React,{useState,useMemo} from 'react'
import './ParentForwardref.css';
function Usememo() {

    const [salary,setSalary] = useState(1)
    const [age,setAge] = useState(0)
    const incrementsalary = useMemo(()=>{
        setSalary(salary+1)
    },[salary])
    const incrementage = useMemo(()=>{
        setAge(age+1)
    },[age])
    return (
        <div className="usecallback">
             <button>{salary}</button>
             <div>&nbsp;</div>
            <button onClick={incrementsalary}>incrementvalue</button>
            <div>&nbsp;</div>
            <button>{age}</button>
            <div>&nbsp;</div>
            <button onClick={incrementage}>incrementamount</button>
        </div>
    )
}

export default Usememo
