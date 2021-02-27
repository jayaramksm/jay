import React, { Component } from 'react';

class Normal_rerenderComponent extends Component {
    state = {}
    // shouldComponentUpdate(){
    //     return false
    // }
    render() {
        console.log("Normal_rerenderComponent ==>")
        return (

            <div className="p-1">
                <h3 className="text-center"> Normal_rerenderComponent</h3>
                <div className="card">
                    <div className="card-header text-center"> {this.props.name} kohile</div>
                    <div className="card-body text-center">hello</div>
                </div>

            </div>
        );
    }
}

export default Normal_rerenderComponent;