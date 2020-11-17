import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AppBar, Menu } from '@material-ui/core';
import PrimarySearchAppBar from './home/header';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Navbar from './home/nav';
import Menus from './menu/menu';
import Carousel from './home/carousel';
import Usesatate from './hooks/usestatehook';
import Booklist from './context/dataresiving';
import Params from './home/params';
import Getmethode from './restapi/getmethode';
import LifecycleA from './lifeCycles/componentlife_cycle_A';
export const userText = React.createContext()
function App() {
  return (
   <div>
     <userText.Provider value={"jayaram kasim "}>

     </userText.Provider>
      <Router>
<PrimarySearchAppBar></PrimarySearchAppBar>


     <Switch>
    
    {/* <Route path="/state" component={State}></Route>
    
    <Route path="/jayaram" component={Jayaram}></Route>
     <Route path="/jay" component={Jay}></Route> 
     <Route path="/form" component={Forms}></Route> 
     <Route path="/list" component={Jayaram }></Route> 
     <Route path="/api" component={Api}></Route>  */}
     
     <Route exact path="/" component={Carousel}></Route>
     <Route path="/menu" component={Menus}></Route>
     <Route path = "/usehook" component={Usesatate}></Route>
     <Route path = "/context" component={Booklist}></Route>
     <Route path="/restapi" component={Getmethode}/>
     <Route path="/lifecycle" component={LifecycleA}/>
     <Route path="/post/:post_id" component={Params}></Route>
     
  
     </Switch>
   </Router>
   </div>
  );
}

export default App; 
