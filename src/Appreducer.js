// import React, { Component } from 'react';
// import {connect} from 'react-redux';

// export class Appreducer extends Component {
//     render() {
//         return (
//             <div>

//                 your age:<span>{this.props.age}</span>
//                 <button onClick={this.props.onAgeUp}>AGEup</button>
//                 <button onClick={this.props.onAgeDown}>AGEdown</button>
                
//             </div>
//         );
//     }
// }

// const mapStateToProps = state =>{
//     return{
//         age:state.age
//     };
// };


// const mapDispachToProps = dispatch =>{
//     return{
//         onAgeUp:()=>dispatch({type:"AGE_UP",value:1}),
//         onAgeDown:()=>dispatch({type:"AGE_DOWN",value:1})
//     };

// };


// export default  connect(mapStateToProps,mapDispachToProps)(Appreducer);
