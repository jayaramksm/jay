import React, { Component } from 'react';
class PropsB extends Component {
    state = { 
        fname:"",
        lname:""
     }
    handleChange =(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
        handleSubmit = (e)=>{
            e.preventDefault();
            console.log(this.state)
            this.props.func(this.state)
        }

       
    render() { 
      
        console.log("propsb child =>",this.props.items)
        return (
            <div>
  <div>
            <h1 className="text-center text-success">Props Component D</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>FIRST NAME</th>
                        <th>LAST NAME</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.items&&this.props.items.map((val) => {
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
            <div>
                <h1 className="text-center text-danger">Add List Item</h1>
                <form className="form-group ml-5 mr-5">
                    <label>Enter Your Firest Name</label>
                    <input className="form-control" name="fname" type="text" value={this.state.fname}  onChange={this.handleChange}/>
                    <label className="mt-3">Enter Your Last Name</label>
                    <input className="form-control p-0 m-0" name="lname" type="text"  value={this.state.lname}  onChange={this.handleChange}/>

                    
                </form>
                <div className="mt-3  text-right">
                        <button  className="btn btn-primary pl-2 pr-2" onClick={this.handleSubmit}> ADD </button>
                    </div>
            </div>
         
        </div>
            </div>
          );
    }
}
 
export default PropsB;