import React, { useState } from 'react';
import axios from 'axios'
function ApiCall() {
    const [data, setdata] = useState()
    // setInterval(async () => {
    console.log(" functional component every one minit  =>>>", data)
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res)
            // setdata(res.data)

        })
        .catch(error => {
            alert("Network error")
            console.log(error)
        })

    // }, 10000);

    return (
        <div>

        </div>
    )
}

export default ApiCall