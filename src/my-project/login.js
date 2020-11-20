import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import PrimarySearchAppBar from './header';

export const Idvalue = React.createContext();
export function valuepass(vaal) {
    return vaal
}
class Login extends Component {
    state = {
        email: null,
        password: null,
        error: false,
        singleuserinfo: [],
        id: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value

        })
        // console.log(e.target)
        // console.log(e.target.id)
    }
  
    
    handleSubmit = (e) => {
        e.preventDefault();

        console.log(this.state)
        var val = []
        axios.get('http://localhost:4200/employees')
            .then(res => {
                console.log(res.data)
                res.data.map((values) => {
                    if (this.state.email == values.email && this.state.password == values.password) {
                        console.log("hjgdku =>", values)
                        this.props.history.push('/home')
                        valuepass(values.id)
                        this.setState({
                            error: false,
                            // singleuserinfo: [...values],
                            id: values.id
                        })

                        console.log("value", values)
                    } else {
                        this.setState({
                            error: true
                        })
                    }
                })

            })


            .catch(error => {
                // alert("Network error..")
                console.log(error)
            })



    }

    render() {
        return (
            <div>
                {console.log("huuhuhuh =>", this.state)}

                {/* <Idvalue.Provider value={this.state.id}>
                <PrimarySearchAppBar />
            </Idvalue.Provider> */}

                <div className=" mt-5">

                    <div className="w-25 m-auto sing p-3">
                        <div className="text-center">
                            <h3 className="mt-1 text-danger">Login</h3>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <label className="mt-3">Enter Your Email</label>

                            <input className="form-control" id="email" onChange={this.handleChange} type="email" placeholder="Enter your Email" />
                            <label className="mt-4">Enter Your password</label>
                            <input className="form-control" id="password" onChange={this.handleChange} type="password" placeholder="Enter Your Password" />
                            {this.state.error ? <div className="text-danger mt-2">Enter Valid Input</div> : null}

                            <button type="submit" className="form-control mt-3 btn btn-primary">Login</button>
                            <Link to="/"><div className="mt-2 text-primary">Creat New Account </div></Link>
                        </form>
                    </div>
                </div>
            </div>
        )

    }
}

export default Login