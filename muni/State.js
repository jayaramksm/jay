import React from "react";
class State extends React.Component {
    constructor(props){
        super(props)
        this.state={
            value:1,
            count:0,
        }        
    }


//by using arrow functions
    handleIncrement=()=>{
        this.setState({
            value:this.state.value+1
        });
    }    

    handleDecrement=()=>{
        this.setState({
            value:this.state.value-1
        });
    }

//by using arrow function inside event

    handleDecrementprevstate(){
        this.setState((prevState)=>({
           count:prevState.count-10
        }));
    }
    handleIncrementprevstate(){
        this.setState((prevState)=>({
           count:prevState.count+10
        }));
    }

    resestPrevstate(){
        this.setState((prevState)=>({
            count:prevState.count*0
        }));
    }

    

    render() {
      return (
<div>
    <h3>By normalState increment</h3>
    {this.state.value}
    <div>&nbsp;</div>
    <button onClick={this.handleIncrement}>Increment</button>
    <button onClick={this.handleDecrement}>Decrement</button>
    
    <h3>using PrevState</h3>
    {this.state.count}
    <div>&nbsp;</div>
     {/*by using arrow function inside event */}
    <button onClick={()=>this.handleIncrementprevstate()}>Incrementby10</button>
    <button onClick={()=>this.resestPrevstate()}>Reset</button>
    <button onClick={()=>this.handleDecrementprevstate()}>Decrementby10</button>

    <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>

</div>



      );

    }
  }
  export default State;