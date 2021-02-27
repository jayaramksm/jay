import React, { Component } from 'react';
import ApiCall from '../../api call_funtion.js/api_function';
import PrimarySearchAppBar from '../header';
import Navbar from '../nav';
import PropsB from './PropsB';
import PropsC from './propsC';
class PropsA extends Component {
    state = {
        list: [
            {
                id: 1,
                name: "jayaram",
                lname: "kasim"
            },
            {
                id: 2,
                name: "Rohith",
                lname: "rs"
            }
            , {
                id: 3,
                name: "Anil",
                lname: "s"
            }
            , {
                id: 4,
                name: "kranthi",
                lname: "rohit"
            }
        ],
        val:""
    }
    resdata = (val) => {
        val.id = this.state.list.length + 1
        let updateval = [...this.state.list, val]
        console.log("propsa updated val =>", updateval)
        this.setState({
            list: updateval
        })
    }
    render() {
        console.log("propsA parent component =>")
        return (
            <div>
                <PrimarySearchAppBar />
                <Navbar />
                <h1 className="text-center text-danger">PropA Component</h1>

                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>FIRST NAME</th>
                            <th>LAST NAME</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.list.map((val) => {
                            return (
                                <tr key={val.id}>
                                    <td>{val.id}</td>
                                    <td>{val.name}</td>
                                    <td>{val.lname}</td>

                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <input type="text" onChange={(e)=>this.setState({val:e.target.value})}/>
                <PropsB func={this.resdata} items={this.state.list} />
                <PropsC items={this.state.list} />
                <ApiCall />
            </div>


        );
    }
}

export default PropsA;