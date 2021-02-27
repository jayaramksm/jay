import { API_CALL ,LOADING,POST,SUCCESS} from "./type"


export const saga_action = (val)=>{
    console.log('saga_action API_CALL')
    return {
        type : API_CALL,
        payload : val
    }
}
    export const dispatch=()=>{
        console.log('dispatch LOADING')
        return {
            type: LOADING,
            status : true,
            url : 'http://localhost:4200/employees'
        }
      }
      export const action_post = (val)=>{
        console.log('saga_action API_CALL')
        return {
            type : POST,
            payload : val
        }
    }
    export const post_success =(item)=> {
        
        return {
            type :SUCCESS,
            payload : item
        }
    }