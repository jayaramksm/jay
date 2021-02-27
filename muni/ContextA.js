import React, { Component } from 'react'
import ContextB from './ContextB';
import {Userprovider} from './Context';


 class ContextA extends Component {
    render() {
        return (
            <div>
            <Userprovider value="username">
                <ContextB />
            </Userprovider>

                <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
            </div>
        
            
        )
    }
}

export default ContextA
