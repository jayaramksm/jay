import React, { Component } from 'react';
import './Styles.css';
import style from "./styles1.css";
import styled from 'styled-components';
export class Styles extends Component {
   
    render() {
        const inlinestyles={
            color:'red',
            border:'1px',
    
            
        }
        const inlinestyleing={
            color:'hotpink',
            
        }
        const Styledbutton = styled.button`
                                color:black;
                                font:inherit;
                                cursor:pointer;
                                &:hover{
                                    background-color:green;
                                    color:black
                                }

        `;

    
        return (
            <div>
                <h1 style={inlinestyles}>STYLING BY <i style={inlinestyleing}>inline</i></h1>
                <h1 className="one">STYLING BY <i className="two">External Stylesheet</i></h1>
                <h1 className={style.one}>STYLING BY <i className={style.modules1}>CSS Modules</i></h1>
                <Styledbutton>Button</Styledbutton>
                <h1><i>Styling by styled components(library)</i></h1>
               
                <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            </div>
        )
    }
}

export default Styles
