import { API_CALL, LOADING,SUCCESS } from "./type"

const initialvalues = {
    api_data : '',
    post_suc : ''
}

 export const Reducer_saga = (state = initialvalues,action)=>{
     console.log('Reducer_saga')
 switch(action.type){
   
     case API_CALL : 
     return {
         ...state ,
         api_data : action.payload,
     }
     case SUCCESS : 
     return {
         ...state ,
         post_suc :"success",
     }
     default : return{
         ...state
     }
 }
}