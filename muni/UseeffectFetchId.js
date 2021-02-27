import React,{useState,useEffect} from 'react';
import axios from 'axios'

function UseeffectFetchId() {
    const [post,setPost] = useState([])
    const [id,setId] = useState('1')
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response=>{
            setPost(response.data)
        })
        .catch(error=>{
            console.log(error)
        })
    })
    return (
        <div>
            <input type="text" value={id} onChange={e=>setId(e.target.value)} />
            {
                post.map(postt=>
                (<li key={postt.id}>{post.name}</li>))
            }
            
        </div>
    )
}

export default UseeffectFetchId
