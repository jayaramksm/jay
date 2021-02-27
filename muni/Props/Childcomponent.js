import React, { Component } from 'react';
import Nestedchild from './Nestedchild';

class Childcomponent extends Component {

    greetParent=()=>{

        this.props.greetParent()
    }


    render() {
        return (
            <div>
                
                
                <Nestedchild greeting={this.props.greeting} 
                             style={this.props.style}
                             greetParent ={this.greetParent}/>
            </div>
        )
    }
}

export default Childcomponent
