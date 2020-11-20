import React from 'react';
import{Link} from 'react-router-dom'

function Navbar (){
   const style = {
       fontFamily:"bold",
       fontStyle:"italic"
   }
        return ( 
            <div className="bg-secondary text-white">
<div className="d-flex justify-content-around text-white">
    
<Link   to="/home"><h2 style={style}>Home</h2></Link>
 <Link  to="/usehook"><h2 style={style}>Hook</h2></Link> 
<Link  to="/lifecycle"><h2 style={style}>LifeCycleA</h2></Link>
<Link  to="/context"><h2 style={style}>context</h2></Link>
<Link to="/restapi"><h2 style={style}>Rest Api</h2></Link> 

</div>
</div> 
         );
    
}
 
export default Navbar;