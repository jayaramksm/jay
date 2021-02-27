import React, { Component } from 'react';
import './Terinary.css';

 class Terinary extends Component {
    constructor(props){
        super(props)
        this.state={
            condition:true
        }

    }

    handleCondition=()=>{
        this.setState({
            condition:false
        })
    }



    render() {
        return (
            <div>
                <button onClick={this.handleCondition}>Switch condition</button>
                {  this.state.condition ?
                 <div className="condition1">
                                            <b>THE CONDITION <br/>
                                            <u><small>IS TRUE</small></u> <br/>
                                            so <u>condition 1</u><br/>
                                            executes
                                            </b></div> :
                  <div className="condition2">
                                            <b>THE CONDITION <br/>
                                            <u><small>IS False</small></u> <br/>
                                            so <u>condition 2</u><br/>
                                            executes</b></div>
                  }
                <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
            </div>
        );
    }
}

export default Terinary
