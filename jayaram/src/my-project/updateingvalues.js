import React, { Component } from 'react';
class Updatevalues extends Component {
    state = {  }
    componentDidUpdate(pP,pS){
        console.log("PRVIOUS STATE",pP)
    }
    render() { 
        console.log("id",this.props.id)
        return ( 
            <div>

            </div>
         );
    }
}
 
export default Updatevalues;

// function Updatevalues(props){
// const id = props.id
// useEffect((pp,ps)=>{
// console.log("previous props",pp,ps)
// })
//     return(
//         <div>
// {console.log("id updatedvalues",props.id)}
            
//         </div>
//     )
// }

// export default Updatevalues