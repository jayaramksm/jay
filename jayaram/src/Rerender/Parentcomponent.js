import React, { Component } from 'react';
import PrimarySearchAppBar from '../my-project/header';
import Navbar from '../my-project/nav';
import { Memo_rerenderComponent } from './memocomponent';
import Normal_rerenderComponent from './normalcomponent';
import Pure_rerendeComponent from './purecomponent';

class Parent_RerenderComponent extends Component {
    state = {
        count: 0
    }
    handleclick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        console.log("Parent_RerenderComponent ==>")
        return (
            <div className="text-center" >
                <PrimarySearchAppBar/>
                <Navbar/>
                <h1 className="text-center"> Parent component</h1>
                <button className="btn btn-primary" onClick={this.handleclick}>Count : {this.state.count}</button>
                <div className="mt-5 d-flex justify-content-around">
                    <Normal_rerenderComponent name={this.state.count}/>
                    <Pure_rerendeComponent name={this.state.count}/>
                    <Memo_rerenderComponent name={this.state.count}/>
                </div>
            </div>
        );
    }
}

export default Parent_RerenderComponent;