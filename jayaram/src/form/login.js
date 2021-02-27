
import React from 'react';

 

 class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          name:"",
          password:""
      };
    }
    onchange = (e)=>{
        this.setState({
        [e.target.name]:e.target.value
        })
        } 
       
    
    componentDidUpdate(){
        console.log("update")
        console.log(this.state.password)
   
}
getsubmit=(e)=>{
    e.preventDefault();
    console.log(this.state)
console.log(e)
}
    render() {
      return (
        <div>
        
     <h2 className="mt-4 text-center">Log In</h2>
     <div className=" w-50 m-auto">
       <form className="" onSubmit={this.getsubmit}>
         <label>Enter your name</label>
         <input className="form-control" type="text" name="name" onChange={this.onchange} />

         <label className="mt-2">Enter your password</label>
         <input className="form-control" type="text"  onChange={this.onchange} name="password"/>
       <div className="text-right"> <input type="submit" className="btn btn-danger mt-3 " value="Login"/></div> 
       </form>
       {this.state.name}
    </div>
    <div className="mt-3">

    </div>
        </div>
      );
    }
  }
  export default Login