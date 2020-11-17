import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
class Getmethode extends Component {
    state = {  
        resdata:[]
    }
    componentDidMount(){
        // var http = XMLHttpRequest()
        // http.open("GET","https://jsonplaceholder.typicode.com/posts")
        // http.send();
        // http.onload = function(){
        //     var res = http.Responce
        //     console.log(res)
        //     this.setState({
        //                 resdata:res
        //             })
        // }
        // http.onerror = function(){
        //     alert("Loading error")
        // }
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            // console.log(res)
            this.setState({
                resdata:res.data
            })
           
        })
        .catch(error=>{
            console.log(error)
        })
       
    }
    
    render() { 
        const {resdata} = this.state
       var values =  resdata.map(res=>{
            
            return(
               
            <div className="container mt-5" key={res.id}>
            <div className="card">
            <div className="card-header text-center">
            {res.title}
            </div>
            <div className="card-body text-center pt-4 pb-4">
                {res.body}
            </div>
            <div className="card-footer text-right">
                <button className="btn btn-primary texy-white"> <Link className="text-white" to={'/post/'+res.id} >Read more..</Link></button>
            </div>
            </div>
            </div>
            )
        })
        return (
            <div>
                {values}
            </div>
          );
    }
}
 
export default Getmethode;