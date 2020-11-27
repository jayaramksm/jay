
import './App.css';
import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Signup from './form/formik';
import Navbar from './my-project/nav';
import PrimarySearchAppBar from './my-project/header';
import Usesatate from './my-project/hooks';
import Params from './my-project/neestedroutes';
import Getmethode from './my-project/apicall';
import LifecycleA from './my-project/lifecycle';
import Simple from './context.js/children';
import Login from './my-project/login';
import Home from './my-project/home';
import Singleuserinfo from './my-project/singleuserinfo';
import PropsA from './my-project/props_task/PropsA';
import ParentCard from './card-task/parentCard';
import Parent_RerenderComponent from './Rerender/Parentcomponent';
import { useState } from 'react';
import Main_formikComponent from './form/main_Signuo_formik';




function App(props) {
const [condition,setcontion] = useState(false)
console.log(React.version);
  return (

    <Router>
      {/* <PrimarySearchAppBar/>
<Navbar/> */}
         <Switch>
      
         
         <Route exact path="/" component={Signup}></Route>
         <Route path="/login" component={Login}/>
         <Route path = "/home" component={Home}></Route>
         <Route path = "/usehook" component={Usesatate}></Route>
         <Route path="/restapi" component={Getmethode}/>
         <Route path="/post/:post_id" component={Params}></Route>
         <Route path="/lifecycle" component={LifecycleA}/>
         <Route path="/context" component={Simple}/>
         <Route path="/singleuser/:user_id" component={Singleuserinfo}/>
         <Route path="/props" component={PropsA}/>
         <Route path="/parentcard" component={ParentCard}/>
         <Route path="/rerender" component={Parent_RerenderComponent}/>
         <Route path="/main_formik" component={Main_formikComponent}/>
         <Route path="*" component={Signup}>
      </Route>
         </Switch>
       </Router>
  
  );
}

export default App;
