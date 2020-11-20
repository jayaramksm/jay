import React, { Component } from 'react';
import axios from 'axios'
class Userinfo extends Component {
    state = { 
        data:[]
     }
componentDidMount(){
    axios.get('http://localhost:4200/employees')
    .then(res=>{
        console.log(res)
      this.setState({
          data:[...res.data]
      })
       
    })
    .catch(error=>{
        alert("Network error")
        console.log(error)
    })
  
}
    render() {
        const {data} = this.state;
        const values = data.map((val)=>{
           return(
           <tr key={val.id}>
               <td>{val.id}</td>
               <td>{val.firstName}</td>
               <td>{val.lastName}</td>
               <td>{val.email}</td>
               <td>{val.password}</td>
           </tr>
           )
        })
        
        return (  <div>
            <h1 className="text-center text-secondary mt-5 mb-5"> All Users Details</h1>
             <table className="table">
                <thead>
                    <tr>
        <th>ID</th>
        <th>FIRST NAME</th>
        <th>LAST NAME</th>
        <th>EMAIL</th>
        <th>PASSWORD</th>
                    </tr>
                </thead>
                <tbody>
                {values}
                </tbody>
            </table>
            

        </div>);
    }
}
 
export default Userinfo;