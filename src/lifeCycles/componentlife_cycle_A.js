 import React, { Component } from 'react';
import Usesatate from '../hooks/usestatehook';
class LifecycleA extends Component {
  constructor(props){
      super()
      console.log("constructor call")
   this.state = {
        count : 0,
        mount : false
      }
     
          this.addcount = () => this.setState({ count : this.state.count+ 1
      })
      this.removecount =() => this.setState({ count : this.state.count-1})
      this.mountcounter = ()=> this.setState({mount : true})
      this.unmountcounter = ()=> this.setState({mount : false})
    }

    componentDidMount(){
        console.log("component Did mount")
    }
    componentWillMount(){
        console.log("component will mount")
    }
    componentDidUpdate(pP,pS){
        console.log(pP)

      
        console.log("component did update",pS)
        if(pS == this.state.count){
            console.log("welcome")
        }
        if(pS.count <3){
            this.setState({ count : this.state.count+1})
        }
    }
    componentWillUpdate(){
        console.log("component will  update")
    }

    componentWillUnmount(){
        console.log("component did mount")
    }
    render() { 
        console.log("ranger call")
        return (<div>
                Count : {this.state.count}
                <button onClick={this.addcount}> add </button>
                <button onClick={this.removecount}> remove </button>
                <div className="text-center">
                    <button onClick={this.mountcounter} disabled={this.state.mount}>mountcounter</button>
                    <button onClick={this.unmountcounter} disabled={!this.state.mount}>unmountcounter</button>
                </div>
               
        <div>{this.state.name}</div>
        </div>  );
    }
}
 
export default LifecycleA;