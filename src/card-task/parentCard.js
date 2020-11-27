import React, { Component, createContext } from 'react';
import PrimarySearchAppBar from '../my-project/header';
import Navbar from '../my-project/nav';
import ChildCard from './children';
import axios from 'axios'
import { ParentContext } from './export_context';
// export const DataContext =createContext()
class ParentCard extends Component {
    state = {
        data: null
    }

    componentDidMount() {
        axios.get('http://localhost:4200/employees/')
            .then(res => {
                console.log('ParentCard => res', res)
                this.setState({
                    data: res.data
                })
            })
            .catch(err => {
                alert(err)
            })
    }

    render() {
        return (
            <div>

                <PrimarySearchAppBar />
                <Navbar />
                <h1 className="text-center">Parent Component</h1>
                {/* through  PROPS 
                <ChildCard api={this.state.data}/> */}
                <ParentContext.Provider value={this.state.data}>
                    <ChildCard/>
                </ParentContext.Provider>
            {/* <DataContext.Provider value={this.state.data}>
                <ChildCard/>
            </DataContext.Provider> */}
            
            </div>
        );
    }
}

export default ParentCard;