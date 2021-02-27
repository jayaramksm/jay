import { connect } from "react-redux"
import { dispatch,action_post } from "./action"

function Redux_Connect(props) {
    // console.log('reaxt_redux-saga',props)
    console.log('reaxt_redux-saga',props.api_info.data)
    // props.api_dispatch()
    // const send =  [ {
    //     "firstName": "jayaramaaaa",
    //     "lastName": "kranthi",
    //     "email": "rohith@gmail.com",
    //     "password": "Rohith143@",
    //     "confirmPassword": "Rohith143@",
    //     "id": 3
    //   }]
    // props.action_post(send)
   return(
       <div className="w-50 m-auto">
           <h1>Redux-saga</h1>
          staatus is : {JSON.stringify( props.status)}
               <button  className="btn btn-success ml-2 mt-2" onClick = {props.api_dispatch}>getuser</button> 
   {props.api_info.data && props.api_info.data.map((val)=>{
                  return (
                    <tr className="table  " key={val.id}>
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
const mapStateToProps = (state)=>{
    console.log("mapstatetoprops ",state)
     return{
            api_info : state.api_data,
            status : state.post_suc
}
}

const mapDispatchToProps = (dispat)=>{
    return {
api_dispatch : ()=> dispat(dispatch()),
// post_dispatch : (val)=>dispat(action_post(val))
}
}
export  default connect (mapStateToProps,mapDispatchToProps)(Redux_Connect)