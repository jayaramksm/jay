import React,{useState} from 'react'

  function UsestateArray() {
     const [items, setItems] = useState([])

     const addItem = () =>{
         setItems([...items,{
             id:items.length,
             value:Math.floor(Math.random()*10)+1
         }])
     }
    return (
        <div>
            <button onClick={addItem}>Add Number</button>
            <ul>
                {items.map(item=>(<table border="1px" key={item.id}>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Random no</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td>{item.id}</td>
                        <td>{item.value}</td>
                    </tbody>
                </table>
                   
                 ) )}
            </ul>
            <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
        </div>
    )
}
export default  UsestateArray;
