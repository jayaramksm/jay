import React, { Component } from 'react';
class PropsC extends Component {
    state = { 
        fname:"",
        lname:""
     }
 
    render() { 
      
        console.log("propsc child =>..",this.props.items)
        return (
            <div>
  <div>
            <h1 className="text-center text-success">Prop Component C</h1>
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
           
         
        </div>
            </div>
          );
    }
}
 
export default PropsC;