import React from 'react'
import Childcontexthook from './Childcontexthook';
export const usercontext = React.createContext()


function Contexthook() {
    
    return (
        <div>
            <usercontext.Provider value="CONTEXTHOOKS">

                <Childcontexthook />
            </usercontext.Provider>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
        </div>
    )
}

export default Contexthook;


