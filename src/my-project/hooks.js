import React , {useState} from 'react';
import PrimarySearchAppBar from './header';
import Home from './home';
import Navbar from './nav';


function Usesatate(props) {
    // setTimeout(()=>{
    //     console.log(props)
    //     props.history.push('/')
    //     // after 2 seconds Navigator to home
    // },6000)
    const [name,setneme] = useState({firstname:"",lastname:""})
    const [count,setCount] = useState(0)
    const initail = 0;
    
    const [counts,setstate] = useState(initail)
     const incrementfive = ()=>{
         setstate(prevCount =>prevCount + 5)
     }
return(
<div>
    <PrimarySearchAppBar/>
    <Navbar/>
   
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
{/* <Objecthook/> */}
</h1>
<div>
            <input type="text" placeholder="enter your firstname" value={name.firstname} onChange={e=>setneme({ ...name,firstname:e.target.value})} />
            <input  type="text" value={name.lastname} onChange={e=>setneme({...name,lastname:e.target.value})} />
            <div>
    <h2>firstname : {name.firstname}</h2>
    <h2>secondname : {name.lastname}</h2>
    <h2>{JSON.stringify(name)}</h2>
            </div>
        </div>  

</div>
)
}

export default  Usesatate;
