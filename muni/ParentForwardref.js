import React, { Component } from 'react'
import Frinput from './Forwardref';
import './ParentForwardref.css';
class ParentForwardref extends Component {
    constructor(props){
        super(props)
        this.forwardinputref = React.createRef()
    }
    

    forwardclickHandler=()=>{
        this.forwardinputref.current.focus()

   }


    render() {
        
        return (
            <div className="container">
                <Frinput ref={this.forwardinputref} />
                <button onClick={this.forwardclickHandler}>ForwardRef</button>       
            </div>
        )
    }
}

export default ParentForwardref
