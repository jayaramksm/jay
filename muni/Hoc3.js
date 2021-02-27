import React, { Component } from 'react'
import UpdatedComponent from './Hoc';


 class Hoc3 extends Component {
    render() {
        const {value,decrementCount} = this.props
        return (
            <div>
               value: {value}
                <div>&nbsp;</div>
                <button onClick={decrementCount}>decrementCount</button>
            </div>
        )
    }
}

export default UpdatedComponent(Hoc3);
