import React, { PureComponent } from 'react'

export class Purecompo extends PureComponent {
    constructor(props){
        super(props)
        this.state={
            name:'unchanged'
        }
    }

    handleChangename = () =>{
        this.setState({name:'unchanged'})
    }
    render() {
        console.log(this.state.name)
        return (
            
            <div>
                
                {this.state.name} <div>&nbsp;</div>
                <button onClick={this.handleChangename}>Button</button>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
            </div>
        )
    }
}

export default Purecompo
