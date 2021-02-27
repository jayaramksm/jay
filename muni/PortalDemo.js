import React from 'react';
import ReactDOM from 'react-dom';


const PortalDemo = ({open}) =>


open?
     ReactDOM.createPortal(
    <h1>Portals</h1>,
        document.getElementById("portal-root")
    )
    :null


export default PortalDemo;
