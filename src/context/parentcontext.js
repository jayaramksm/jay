import React, { Component, createContext } from 'react';
export const Themcreat=React.createContext()
class ThemeContext extends Component {
    state = { 
        theme:true,
        light:{
            syntex:'#555',
            ui:'#ddd',
            bg:'#eee'
        },
        dark:{
            syntex:'white',
            ui:'#ddd',
            bg:'black'  
        }
     }
    render() { 
        return (
            <Themcreat.Provider value={'btn btn-dark'}>
              {this.props.children}
            </Themcreat.Provider>
          );
    }
}
 
export default ThemeContext;