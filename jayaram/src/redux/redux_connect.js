import React from 'react';
import { connect } from 'react-redux';
import { action, userinfo_action } from './redux_action';

function Redux_connectionComponent (props) {
    console.log("connection props ", props)
    console.log("userinfo",props.userdetails)
    return(
        <div>
            connection :  {props.addnumbers}
             <button  className="btn btn-danger mt-2" onClick = {props.add}>add</button> 
             <button  className="btn btn-success ml-2 mt-2" onClick = {props.getuser}>getuser</button> 
             { props.userdetails.map((val)=>{
                  return (
                    <tr className="table  w-50 m-auto" key={val.id}>
                        <td>{val.id}</td>
                        <td>{val.firstName}</td>
                        <td>{val.lastName}</td>
                        <td>{val.email}</td>
                        <td>{val.password}</td>
                    </tr>
                )
             })}
        </div>
    )
    
}
const mapStateToProps = state=>{
    return {
        addnumbers : state.addnumbers ,
        userdetails : state.userinfo
    }
}

const mapStateToDespatch = dispatch =>{
    console.log("dispatch",dispatch)
  var data  = [ {
    "firstName": "jaya venkata",
    "lastName": "sitaram",
    "email": "jayramksm@gmail.com",
    "password": "7989819129aA@",
    "confirmPassword": "7989819129aA@",
    "id": 4
  },
  {
    "firstName": "anil",
    "lastName": "s",
    "email": "anil@gmail.com",
    "password": "123ABCabc@",
    "confirmPassword": "123ABCabc@",
    "id": 5
  }]
    return {
        add :()=>dispatch(action()),
        getuser : ()=>dispatch(userinfo_action(data))
    }
}
export default connect(mapStateToProps,mapStateToDespatch)(Redux_connectionComponent)