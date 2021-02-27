import React, { Component } from 'react'

 class Hoc1 extends Component {

    render() {

        const {count,increment} = this.props;
        return (
            <div>
                {count}
                <button onClick={increment}>increment</button>
                
            </div>
        )
    }
}

export default Hoc(Hoc1);
