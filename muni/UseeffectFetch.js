import React,{useState,useEffect} from 'react';
import axios from 'axios'


function UseeffectFetch() {
    const [post,setPost] = useState([])
   
    useEffect(() => {
       axios.get('https://jsonplaceholder.typicode.com/users/')
       .then(responose=>{
           setPost(responose.data)
       })
       .catch(error=>{
           console.log(error)
       })
    },[post])
    return (
        <div>
           
        
            <ul>
                {
                    post.map(postt=>(
                        <li key={postt.id}>{postt.username}</li>
                    ))
                }
            </ul>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
        </div>
        
    )
}

export default UseeffectFetch;
