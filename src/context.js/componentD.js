import React, { useContext, useEffect, useState } from 'react';
import { Itemcontextapi } from './componentA';

function ComponentD() {
    const Rescontect = useContext(Itemcontextapi);
    console.log("ComponentD_Rescontect =>", Rescontect)

    var names
    const [name, setneme] = useState({ firstname: "", lastname: "" })
    // const [items, setitems] = useState(Rescontect.list)
    useEffect(() => {
        // names = [...Rescontect, name]
        // console.log("update", names)


    }, [name])
    const handleonclick = () => {
        
        console.log(name)
        // let somedata = [...items, name]
        Rescontect.func(name)
        // setitems({
        //     items: somedata
        // })
        // console.log("spread =>", items)

    }

    return (
        <div>
            <h1 className="text-center text-success">Component D</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>FIRST NAME</th>
                        <th>LAST NAME</th>
                    </tr>
                </thead>
                <tbody>
                    {Rescontect.list.map((val) => {
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
            <div>
                <h1 className="text-center text-danger">Add List Item</h1>
                <form className="form-group ml-5 mr-5">
                    <label>Enter Your Firest Name</label>
                    <input className="form-control" type="text" value={name.firstname} onChange={e => setneme({ ...name, firstname: e.target.value })} />
                    <label className="mt-3">Enter Your Last Name</label>
                    <input className="form-control p-0 m-0" type="text" value={name.lastname} onChange={e => setneme({ ...name, lastname: e.target.value })} />

                    
                </form>
                <div className="mt-3  text-right">
                        <button onClick={handleonclick} className="btn btn-primary pl-2 pr-2" > ADD </button>
                    </div>
            </div>
            <h2>firstname : {name.firstname}</h2>
            <h2>secondname : {name.lastname}</h2>
        </div>
    )
}

export default ComponentD