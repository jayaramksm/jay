import React from "react";
import './Menu.css';
import {Link} from "react-router-dom";
const Menu =()=>{
    return(
        <div className="margin">
        
        <h1>REACT JS</h1>
        <nav className="navbar navbar-inverse"
>
            <ul className="nav navbar-nav">
            <li><Link to="/" className="zoom">REACT CONCEPTS</Link></li>
            
            <li><Link to="/state" className="zoom">state and setstate</Link></li>
            
            <li><Link to="/condition" className="zoom">condition rendering</Link></li>
            
            <li><Link to="/terinary" className="zoom">Terinary condition </Link></li>
            
            <li><Link to="/eventhandling" className="zoom"> Eventhandling </Link></li>
            <li><Link to="/props" className="zoom"> Props in class components </Link></li> 
            <li><Link to="/Functionprops" className="zoom"> Props in functional components </Link></li>  
            <li><Link to="/Purecompo" className="zoom"> Purecompoponents   </Link></li>
            <li><Link to="/higherorder" className="zoom">Higher order Components </Link></li>
            <li><Link to="/context" className="zoom">Context </Link></li>
            
            <li><Link to="/http" className="zoom">Http GET</Link></li>
            <li><Link to="/http1" className="zoom">Http POST </Link></li> 
            <li><Link to="/refs" className="zoom">Refs </Link></li>
            
            <li><Link to="/refvalidation" className="zoom">Refvalidation </Link></li>
            <li><Link to="/parentForwardref" className="zoom">ParentForwardref </Link></li>
            <li><Link to="/usestatehook" className="zoom">Usestatehook </Link></li>
            <li><Link to="/usestateArray" className="zoom">UsestateArray </Link></li>
            <li><Link to="/useeffect" className="zoom">Useeffect </Link></li> 
            <li><Link to="/useeffectFetch" className="zoom">UseeffectFetch </Link></li>
            <li><Link to="/useeffectFetchiid" className="zoom">UseeffectFetchId </Link></li> 
            <li><Link to="/Contexthook" className="zoom">Contexthook </Link></li>
            <li><Link to="/UseReducerHook" className="zoom">UseReducerHook </Link></li>
            <li><Link to="/Usecallback" className="zoom">Usecallback </Link></li>  
            <li><Link to="/Userefhook" className="zoom">Userefhook </Link></li> 
            <li><Link to="/PropType" className="zoom">PropType </Link></li> 
            <li><Link to="/Styles" className="zoom">Styles </Link></li>  
            <li><Link to="/FragsStickt" className="zoom">Fragments and StrictMode </Link></li>    
            <li><Link to="/SighnupForm" className="zoom">Formik(validation) </Link></li> 
            <li><Link to="/Portals" className="zoom">Portals </Link></li>
          

            
            </ul>
            
        </nav>

      

        
        
        </div>
        
    );
}
export default Menu;