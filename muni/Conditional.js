
import React, { Component } from "react";
class Conditional extends Component{
    constructor(props){
        super(props)
        this.state={
            text:'',
            inputText:'',
            mode:'view',
            condition:false
        };

      
        
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
 
        
    }
    
    handleChange(e){
        this.setState({
            inputText:e.target.value
        });
    }

    handleSave(e){
        this.setState({
            text:this.state.inputText,
            mode:'view'

        })
    }

    handleEdit(e){
        this.setState({
            mode:'edit'
        })
    }

    render(){

        if(this.state.mode==='view'){
            return(
                <div>
                    <p>Text:{this.state.text}</p>
                    <button onClick={this.handleEdit}>Edit</button>
                </div>
            );
        }
        else{
            return(
                <div>
                    <p>Text:{this.state.text}</p>
                    <input  onChange={this.handleChange}
                            value={this.state.inputText}
                    />
                    <button onClick={this.handleSave}>Save</button>
                    
                </div>
            );
        }

}
}
export default Conditional;