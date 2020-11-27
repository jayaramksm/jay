import React from 'react';
import { Data_pass } from './Datapass_component';

function DataRecive(){
    const data = "hello world"
    Data_pass(data)
    return(
        <div>
            <Data_pass/>
            {/* {console.log("data_resive",Data_pass)} */}
        </div>
    )
}
export default DataRecive