import Userinfo from "../my-project/All_users_info"
import { addnumber } from "./redux_type"
import { user } from "./redux_type"
export const action = (val)=>{
    return{
        type :addnumber,
    }
}

export const userinfo_action = (val)=>{
    return{
        type :user,
        payload : val
    }
}