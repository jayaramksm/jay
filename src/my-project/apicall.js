import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import PrimarySearchAppBar from './header';
import Home from './home';
import Navbar from './nav';
class Getmethode extends Component {
    state = {
        resdata: [],
        id: 1
    }

    componentDidMount() {

        // setInterval(async () => {
            console.log("every one minit  =>>>")
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(res => {
                    console.log(res)
                    this.setState({
                        resdata: res.data

                    })

                })
                .catch(error => {
                    alert("Network error")
                    console.log(error)
                })

        // }, 10000);


    }
    componentWillUnmount(){
        clearInterval();
    }

    render() {
        const { resdata } = this.state
        var values = resdata.map(res => {

            return (

                <div className="container mt-5" key={res.id}>
                    <div className="card">
                        <div className="card-header text-center">
                            {res.title}
                        </div>
                        <div className="card-body text-center pt-4 pb-4">
                            {res.body}
                        </div>
                        <div className="card-footer text-right">
                            <Button variant="contained" >
                                <Link className="text-white" to={'/post/' + res.id} >Read more..</Link>
                            </Button>
                            <Button className="ml-2" variant="contained" color="secondary"> <Link className="text-white" to={'/post/' + res.id} >Update</Link></Button>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div>
                <PrimarySearchAppBar />
                <Navbar />
                {values}
            </div>
        );
    }
}

export default Getmethode;
