import React, { Component } from 'react';
import './Table.css';

class Refvalidation extends Component {
    constructor(props){
        super(props)

        this.username = React.createRef();
        this.password = React.createRef();
        this.state={
            errors:[]
        }

        
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        const username = this.username.current.value
        const password = this.password.current.value
        const errors = this.handleValidation(username,password);
        if(errors.length>0){
            this.setState({
                errors
            })
            return;
        }
        

    }

    handleValidation=(username,password)=>{
        const errors = [];

        if(username.length===0)
        {
            errors.push('please enter username')
        }
        if(password.length<8){
            errors.push('password length must be greater than 8 characters')
        }

        return errors;
    };



    render() {
        const {errors} = this.state
        var style={
            color:'red'
        }
        return (
            <div className="httppost">
                <form onSubmit={this.handleSubmit}>
                   
                    <label>USERNAME</label>
                    <div>&nbsp;</div>
                    <input type="text" ref={this.username} />
                    <div>&nbsp;</div>
                    <label>PASSWORD</label>
                    <div>&nbsp;</div>
                    <input type="text" ref={this.password} />
                    {
                        errors.map(error=><div style={style} key={error}>{error}</div>)
                    }
                    <div>&nbsp;</div>
                    <button type="submit" >submit</button>
                </form>
            </div>
        )
    }
}

export default Refvalidation
