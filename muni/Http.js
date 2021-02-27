import React, { Component } from 'react'
import axios from 'axios';


class Http extends Component {

    constructor(props){
        super(props)
        this.state={
            post:[],
            Errormessage:''

        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            this.setState({
                post:response.data
            })
            
        })
        .catch(error=>{
            this.setState({Errormessage:'something went wrong'})
        })
    }
    

    render() {
        const {post} = this.state
        return (
           
            <div>
                {
                    post.length?
                    post.map(values=><div key={values.id}><table border="1px">
                        <thead>
                        <tr>
                          <th>id</th>
                          <th>username</th>
                          <th>email</th>
                          </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td>{values.id}</td>
                          <td>{values.username}</td>
                          <td>{values.email}</td>
                        </tr>
                        </tbody>
                      </table></div>):null
                   
                }
            </div>
        )
    }
}

export default Http

