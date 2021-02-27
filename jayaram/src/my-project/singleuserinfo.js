import React, { Component } from 'react';
import axios from 'axios'
import{Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
// import { Singleuser } from './login';

class Singleuserinfo extends Component{
    state={
        id:null,
        data:null
    }
    componentDidMount(){
        var apidata;
        console.log(this.props)
            let id = this.props.match.params.user_id
           
            console.log(id + "lklj")
            this.setState({
                id:id
            })
            axios.get('http://localhost:4200/employees/'+id)
            .then(res=>{
                apidata = res;
                console.log(res.data)
                this.setState({
                    data:res.data
                })
               
            })
            .catch(error=>{
                console.log(error)
            })



    }

// update(e) {
//         e.preventDefault();
//         const employee = {
//             name: this.state.name,
//             age: this.state.age,
//             salary: this.state.salary,
//         }
//         axios.put('http://dummy.restapiexample.com/api/v1/update/{this.state.id}', employee)
//         .then(res => console.log(res.data));
//     }

componentDidUpdate(){}

    render(){
        var post = this.state.data ? (
            <div className="container mt-5" >
            <div className="card">
            <div className="card-header text-center">
            <h1 className="text-success sing"> welcome {this.state.data.firstName} </h1> 
            </div>
            <div className="card-body text-center pt-4 pb-4">
               <ul className="list-group">
        <li className="list-group-item"><h4>FirstName : <span className="text-danger"> {this.state.data.firstName}</span></h4></li>
        <li className="list-group-item"><h4>PastName :<span className="text-danger"> {this.state.data.lastName}</span></h4></li>
        <li className="list-group-item"> <h4>Email : <span className="text-danger">{this.state.data.email}</span></h4></li>
        <li className="list-group-item"><h4>Password :<span className="text-danger">{this.state.data.password}</span></h4></li>
        <li className="list-group-item text-right">
        <Button className="ml-2" variant="contained" color="secondary"> <Link className="text-white" to="/home" >BACK</Link></Button>
        </li>
               </ul>
            </div>
           
            </div>
            </div>
        ) : (
            <div>
                Loading data .....
            </div>
        )
    return(
        <div>
            {post}
 
        </div>
    )
}
}

export default Singleuserinfo;