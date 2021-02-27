import React,{useState} from 'react';
import Todo from './Todo';
import './Table.css';

function Functionprops() {

    const [todos,setTodo] = useState([
        {
            id:1,
            name:'this is one'
        },
        {
            id:2,
            name:'this is two'
        },
        {
            id:3,
            name:'this is three'
        },
        {
            id:4,
            name:'this is four'
        },
        {
            id:5,
            name:'this is five'
        },
    ])

    const random =()=>{
        setTodo({todos:todos})
    }
    return (
        <div>
            <Todo todos={todos} random={random}/>
            <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
        </div>
    )
}

export default Functionprops
