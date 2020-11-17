import React, { Component } from 'react';
import{Link} from 'react-router-dom'

class Navbar extends Component {
   
    
    state = {  }
   
    render() { 
        // console.log(this.props);
        return ( 
            <div className="bg-secondary text-white">
<div className="d-flex justify-content-around text-white">
    
<Link  to="/"><h1>Home</h1></Link>
<Link  to="/menu"><h1>menu</h1></Link>
<Link  to="/usehook"><h1>usesatte hook</h1></Link>
<Link  to="/lifecycle"><h1>LifeCycleA</h1></Link>
<Link  to="/context"><h1>context</h1></Link>
<Link to="/restapi"><h1>Rest Api</h1></Link>

</div>
</div> 
         );
    }
}
 
export default Navbar;