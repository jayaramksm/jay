import React, { Component } from 'react';
import { useContext } from 'react';
import { userText } from '../App';
import { Themcreat } from './parentcontext';
// static contextType=Themcreat
 function  Booklist() {
   
    const text = useContext(Themcreat)
    console.log(text)
    // state = {  }
    // render() { 
        // const {theme,light,dark}=this.context
        // const thems = theme ? light : dark
        // console.log(thems)
        return ( 
           <div >
               {/* <userText.Consumer>
                   {value=>{
                       <div> {value}</div>
                   }}
               </userText.Consumer> */}
               <Themcreat.Consumer>
                   {value=>(
                      
                        <div className={value}>hello {value}</div>
                   )}
               </Themcreat.Consumer>
               <button >hii</button>
               {text}
               <li>hi</li>
               <li>oye</li>
               <li>jayaram</li>
           </div>
         );
    }

 
// const ButtonContext = React.createContext('btn btn-darkyellow'); 
// class Booklist extends Component { 
// render() { 
// return ( 
// <ButtonContext.Provider value="btn btn-success"> 
// <Button /> 
// </ButtonContext.Provider> 
// ); 
// } 
// } 
// function Button(props) { 
// return ( 
// <div className="container"> 
// <ButtonColor /> 
// </div> 
// );  
// } 
// class ButtonColor extends Component { 
// static contextType = ButtonContext; 
// render() { 
// return<center><h1>Hello World :) :)</h1><br/>
// <button className={this.context} > 
// <h2> Bootstrap Success Button</h2>
// </button></center>; 
// } 
// } 
export default Booklist;