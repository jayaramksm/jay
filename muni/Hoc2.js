import React, { Component } from 'react';
import UpdatedComponent from './Hoc';

 class Hoc2 extends Component {
    render() {
        const {count,incrementCount} = this.props
        return (
            <div>
                count:{count}
                <div>&nbsp;</div>
                <button onClick={incrementCount}>incrementCount</button>
            </div>
        )
    }
}

export default UpdatedComponent(Hoc2);
