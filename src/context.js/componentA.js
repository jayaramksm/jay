import React, { useEffect, useState } from 'react';
import ComponentB from './componentB';

export const Itemcontextapi = React.createContext();
function ComponentA() {
    const list = [
        {
            id: 1,
            name: "jayaram",
            lname: "kasim"
        },
        {
            id: 2,
            name: "Rohith",
            lname: "rs"
        }
        , {
            id: 3,
            name: "Anil",
            lname: "s"
        }
        , {
            id: 4,
            name: "kranthi",
            lname: "rohit"
        }
    ]
    const [additem, setadditem] = useState(list)

    const data = (val) => {
        console.log("componentA Updatedval=>", val)
        // val.id = Math.random()
        let addObject = {
            id: additem.length + 1,
            name: val.firstname,
            lname: val.lastname
        }
        let listobjects = [...additem, addObject]
        // additem.push(listobjects)
        console.log("updatedcomponent id", listobjects)
        setadditem(listobjects)
    }
    useEffect(() => {
        console.log("update additem =>")
    }, [additem])

    return (
        <div>
            <h1 className="text-center text-danger">ComponentA</h1>

            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>FIRST NAME</th>
                        <th>LAST NAME</th>
                    </tr>
                </thead>
                <tbody>
                    {additem && additem.map((val) => {
                        return (
                            <tr key={val.id}>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                                <td>{val.lname}</td>

                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <Itemcontextapi.Provider value={{ list: additem, func: data }}>
                <ComponentB />
            </Itemcontextapi.Provider>
        </div>
    )
}

export default ComponentA