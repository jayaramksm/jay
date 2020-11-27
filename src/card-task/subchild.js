import React, { Component } from 'react';
import { ChildContext } from './export_context';
class SubChildTWO extends Component {
    static contextType= ChildContext
    state = {
        style :null, 
        toggle : false
    }
    addcolor =()=>{
        this.setState({
            style :{
                background:"red"
            },
            toggle : !this.state.toggle
        })
    }
    render() {
      
        console.log("SubChild props res =>>", this.props.res)
        console.log("SubChild context res =>>",this.context)
        return (
            <div>
                {this.context ? <div onClick={this.addcolor} style={this.state.toggle? this.state.style:null} className="card">
                    <div className="card-header text-center ">
                       Name : {this.context.firstName}
                    </div>
                    <div className="card-body text-center">
                      Email : {this.context.email}
                    </div>
                    <div className="card-footer text-center">
                    Password : {this.context.password}
                    </div>
                </div>:<div>n0</div>}
                
            </div>
        );
    }
}

export default SubChildTWO;