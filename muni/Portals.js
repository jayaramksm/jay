import React, { Component } from 'react';
import PortalDemo from './PortalDemo';


export class Portals extends Component {
    state={
            modalShow:false,

    }

    toogleModel = () =>{
        this.setState({
            modalShow:!this.state.modalShow,
        })
    }
    render() {
        return (
            <div>
                <PortalDemo  open={this.state.modalShow}  />
        
    
                <button onClick={this.toogleModel}>Show Model</button>
            </div>
        )
    }
}

export default Portals
