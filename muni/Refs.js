import React, { Component } from 'react'
import './ParentForwardref.css';
 class Refs extends Component {
    constructor(props){
        super(props)

        this.inputref = React.createRef();
       
    }
   
  
    componentDidMount(){
        this.inputref.current.focus()
    }

   
    render() {
      
        return (
            <div className="containerref">
                <label>Normal Textbox</label>
                <input type="text" />
                <div>&nbsp;</div>
                <label>Normal Textbox</label>
                <input type="text" />
                <div>&nbsp;</div>
                <label>Normal Textbox</label>
                <input type="text" />
                <div>&nbsp;</div>
                <label><u>REF INPUT</u></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" ref={this.inputref} />
                <div>&nbsp;</div>
                <label>Normal Textbox</label>
                <input type="text" />
                <div>&nbsp;</div>
                <label>Normal Textbox</label>
                <input type="text" />
                  
            </div>
        );
    }
}

export default Refs
