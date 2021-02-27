import React, { Component } from 'react';
import  {PropTypes} from 'prop-types';

export class PropType1 extends Component {
    render() {
        return (
            <div>
                    <label>NAME:</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                    <button>{this.props.name}</button>
                    <div>&nbsp;</div>
                    <label>AGE:</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    
                    <button>{this.props.age}</button>
        
                
            </div>
        )
    }
}

PropType1.propTypes={
    name:PropTypes.string,
    age:PropTypes.number
}

export default PropType1
