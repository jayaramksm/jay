import React, { Component } from 'react';
import axios from 'axios'
class Params extends Component {
    state = {  
        id:null,
        data:null,
        value:[]
    }
    componentDidMount(){
        var navrout;
        var apidata;
        console.log(this.props)
            let id = this.props.match.params.post_id
            navrout=id;
            console.log(id)
            this.setState({
                id:id
            })
            console.log('https://jsonplaceholder.typicode.com/posts/'+navrout)
           
            axios.get('https://jsonplaceholder.typicode.com/posts/'+navrout)
            .then(res=>{
                apidata = res;
                console.log(res)
                this.setState({
                    data:res.data
                })
               
            })
            .catch(error=>{
                console.log(error)
            })



    }

    componentDidUpdate(){
        console.log( this.state.data+"update")
    }
    render() { 
    var post = this.state.data ? (
        <div className="container mt-5" >
        <div className="card">
        <div className="card-header text-center">
        {this.state.data.id}  {this.state.data.title}
        </div>
        <div className="card-body text-center pt-4 pb-4">
            {this.state.data.body}
        </div>
        {/* <div className="card-footer text-right">
            <button className="btn btn-primary texy-white"> <Link className="text-white" to={'/'+res.id} >Read more..</Link></button>
        </div> */}
        </div>
        </div>
    ) : (
        <div>
            Loading data .....
        </div>
    )
        return ( 
            <div>
                hii this is params {this.state.id}
                <div>
                    {post}
            </div>
            </div>
         );
    }
}
 
export default Params;