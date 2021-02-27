import React, { Component } from 'react'
import {Userconsumer} from './Context';
 class ContextC extends Component {

    render() {
        return (
            <div>
                 <Userconsumer >
                {(user)=>{
                    return <h1>hello enter your {user}</h1>
                }}
                </Userconsumer>
            </div>
        )
    }
}

export default ContextC
