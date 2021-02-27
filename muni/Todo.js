import React from 'react'

function Todo(props) {
    return (
        <div>
            {
                props.todos.map(todo=>{
                    return(
                    <table border="1px" key={todo.id}>
                        <thead >
                            <tr>
                                <th>sno</th>
                                <th>name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{todo.id}</td>
                                <td>{todo.name}</td>
                                </tr>
                        </tbody>
                    </table>
                    )
                })

            
            }
        </div>
    )
}

export default Todo
