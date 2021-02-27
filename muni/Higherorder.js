import React, { Component } from 'react'
import Hoc2 from './Hoc2';
import Hoc3 from './Hoc3';
 class Higherorder extends Component {
    render() {
        return (
            <div>
                <Hoc2 />
                <div>&nbsp;</div>
                <Hoc3 />
                <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
            </div>
        )
    }
}

export default Higherorder
