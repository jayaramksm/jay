import React, { Component } from 'react'
import ContextC from './ContextC';

export class ContextB extends Component {
    render() {
        return (
            <div>
                
                <ContextC />
                
            </div>
        )
    }
}

export default ContextB
