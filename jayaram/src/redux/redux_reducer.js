import {addnumber} from "./redux_type"
import {user} from "./redux_type"
const initialvalues = {
    addnumbers : 5,
    userinfo :[
        {
          "firstName": "jayayaram",
          "lastName": "kasim",
          "email": "jayaramkasim@gmail.com",
          "password": "156P1a0328@",
          "confirmPassword": "156P1a0328@",
          "id": 1
        },
        {
          "firstName": "sitaram",
          "lastName": "kasim",
          "email": "sitaram188@gmail.com",
          "password": "AB123456@a",
          "confirmPassword": "AB123456@a",
          "id": 2
        }]
}

  export const reducer = (state = initialvalues, action)=>{
switch (action.type){
    case addnumber :
        return {
        ...state,
        addnumbers : state.addnumbers + 1 
    }
    case user :
        return{
            ...state,
            userinfo : action.payload
        }
    default : return {
        ...state
    }
        
}
}