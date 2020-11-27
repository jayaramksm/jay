import React from 'react';

export function Func_rerenderComponent(props){
    console.log("Memo_rerenderComponent ==>")
return(
    <div className="m-2">
                <h1 className="text-center"> Memo_rerenderComponent</h1>
                <div className="card">
                    <div className="card-header text-center"> {props.name} , Dhoni</div>
                    <div className="card-body text-center">hello</div>
                </div>

            </div>
)
}

export const Memo_rerenderComponent = React.memo(Func_rerenderComponent)