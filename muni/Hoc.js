import React, { Component } from 'react'


const UpdatedComponent = (OriginalComponent) =>{

    class Hoc extends Component{
        constructor(props){
            super(props)
            this.state={
                count:0,
                value:1200
            }
        }

        incrementCount = () =>{
            this.setState(prevState=>{
                return{ count:prevState.count+1}
            })
            
        }

        decrementCount = ()=>{
            this.setState(prevState=>{
               return{value:prevState.value-20}
            })
        }
        render(){
            return(
                <OriginalComponent 
                
                count={this.state.count}
                incrementCount={this.incrementCount}
                value={this.state.value}
                decrementCount={this.decrementCount}
                
                
                />
            )
        }



    }

 return Hoc



}


export default UpdatedComponent;
