import React,{useEffect,useRef} from 'react'

function Userefhook() {
    const inputRef = useRef()
    useEffect(()=>{
        inputRef.current.focus()
    },[])
    return (
        <div>
            <label>Normal input</label>
            <div>&nbsp;</div>
            <input type="text" />
            <div>&nbsp;</div>
            <label>Input ref</label>
            <div>&nbsp;</div>
            <input type="text" ref={inputRef} />
            <div>&nbsp;</div>
            <label>Normal input</label>
            <div>&nbsp;</div>
            <input type="text" />
            <div>&nbsp;</div>
            <label>Normal input</label>
            <div>&nbsp;</div>
            <input type="text" />
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
        </div>
    )
}

export default Userefhook
