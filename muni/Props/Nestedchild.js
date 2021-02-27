import React, { Component } from 'react'

 class Nestedchild extends Component {
    greetParent=()=>{

        this.props.greetParent()
    }
    render() {
        return (
            <div>
                <h1>{this.props.greeting}</h1>
                <h1 style={this.props.style}>{this.props.greeting}</h1>
                <button onClick={this.greetParent}>methodprops</button>
            
            </div>
        )
    }
}

export default Nestedchild
