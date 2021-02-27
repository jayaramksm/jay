import React, { Component } from 'react';
import Childcomponent from '../src/Props/Childcomponent';

    class Props extends Component {
        constructor(props){
            super(props)
            this.state={
                color:'hotpink',
                name:'props as parentcomponent',
            }

        this.greetParent = this.greetParent.bind(this);
        }

        greetParent(){
            alert(`hello ${this.state.name}`)
        }

        

    render() {
        const greeting="welcome to props";
        const style={
            color:'hotpink'
        }
        return (
            <div>
                {/* <Childcomponent1 color={this.state.color} updateColorHandler={this.updateColorHandler} /> */}
                <Childcomponent greeting={greeting}
                                style={style}
                                greetParent ={this.greetParent}     />

                <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
            </div>
        )
    }
}

export default Props
