
import './App.css';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Menu from './Menu';
import About from './About';
import State from './State';
import Conditional from './Conditional';
import Terinary from './Terinary';
import Eventhandling from './Eventhandling';
import Props from './Props';
import Functionprops from './Functionprops';
import Higherorder from './Higherorder';
import ContextA from './ContextA';
import Http from './Http';
import Http1 from './Http1';
import Refs from './Refs';
import Refvalidation from './Refvalidation';
import ParentForwardref from './ParentForwardref';
import Usestatehook from './Usestatehook';
import UsestateArray from './UsestateArray';
import Useeffect from './Useeffect';
import UseeffectFetch from './UseeffectFetch';
import UseeffectFetchiid from './UseeffectFetchidd';  
import Contexthook from './Contexthook';
import UseReducerHook from './UseReducerHook';
import Usecallback from './Usecallback'; 
import Userefhook from './Userefhook'; 
import PropType from './PropType'; 
import Styles from './Styles';
import FragsStickt from './FragsStickt';   
import SighnupForm from './Formik';  
import Portals from './Portals';  
import Purecompo from './Purecompo';




const  App = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <Menu/>
      <Switch>
        <Route exact path="/" component={About} />
        <Route  path="/state" component={State} />
        <Route  path="/condition" component={Conditional} />
        <Route  path="/terinary" component={Terinary} />
        <Route  path="/eventhandling" component={Eventhandling} />
        <Route  path="/props" component={Props} /> 
        <Route  path="/Functionprops" component={Functionprops} /> 
        <Route  path="/Purecompo" component={Purecompo} />
        <Route  path="/higherorder" component={Higherorder} />
        <Route  path="/context" component={ContextA} />
        <Route  path="/http" component={Http} />
        <Route  path="/http1" component={Http1} />
        <Route  path="/refs" component={Refs} />
        <Route  path="/parentForwardref" component={ParentForwardref} />
        <Route  path="/refvalidation" component={Refvalidation} />
        <Route  path="/usestatehook" component={Usestatehook} />  
        <Route  path="/usestateArray" component={UsestateArray} />
        <Route  path="/useeffect" component={Useeffect} />  
        <Route  path="/useeffectFetch" component={UseeffectFetch} /> 
         <Route  path="/useeffectFetchiid" component={UseeffectFetchiid} />   
        <Route  path="/Contexthook" component={Contexthook} />
        <Route  path="/UseReducerHook" component={UseReducerHook} /> 
        <Route  path="/Usecallback" component={Usecallback} />  
        <Route  path="/Userefhook" component={Userefhook} />  
        <Route  path="/PropType" component={PropType} />  
        <Route  path="/Styles" component={Styles} /> 
        <Route  path="/FragsStickt" component={FragsStickt} />   
        <Route  path="/SighnupForm" component={SighnupForm} />  
        <Route  path="/Portals" component={Portals} />  
      
      </Switch>
    </div>
    </BrowserRouter>
  );
}

// App = Hoc(App);
export default App;
