import React,{useState,useEffect} from 'react'

 function Useeffect() {
     const [count, setCount] = useState(0)
    //  const [name,setName]  =useState('')
     useEffect(() => {
         console.log('useeffect-upadating document title')
         document.title =`you have clicked ${count} times`
     }, [count])
    return (
        <div>
            {/* <input value={name} onChange={e=>setName(e.target.value)} /> */}
            <div>&nbsp;</div>
            <button onClick={()=>setCount(count+1)}>{count}</button>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
        </div>
    )
}

export default  Useeffect;