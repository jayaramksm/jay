import React, { Component } from 'react';
import axios from 'axios';
import './Table.css';
class Http1 extends Component {

    constructor(props){
        super(props)
        this.state={
            userId:'',
            title:'',
            body:''
        }
    }

changeHandler=e=>{
    this.setState({
        [e.target.name]:e.target.value
    })
}
    submitHandler = e =>{
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts/',this.state)
        .then(response=>{
            console.log(response)
        });
        // .catch(error=>{
        //     console.log(error);
        // })
    }

    render() {
        return (
            <div className="httppost">
                <form onSubmit={this.submitHandler} >
                    <label>userId</label>&nbsp;
                    <input type="text" name="userId"  onChange={this.changeHandler} />
                    <div>&nbsp;</div>
                    <label>title</label>&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text" name="title"  onChange={this.changeHandler}  />
                    <div>&nbsp;</div>
                    <label>body</label>&nbsp;&nbsp;
                    <input type="text" name="body"  onChange={this.changeHandler} />
                    <div>&nbsp;</div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Http1
