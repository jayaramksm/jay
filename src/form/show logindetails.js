import React from 'react'

class Details extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }
    
      componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
    //   componentWillUnmount() {
    //     clearInterval(this.timerID);
    //   }
    
      tick() {
        this.setState({
          date: new Date()
        });
      }
    
      render() {
        return (
          <div>
            <h1>Hello, world!</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            {this.props.value.firstName}
          </div>
        );
      }
    }
    
export default Details;




// import React, { Component } from 'react';  
// import ReactTable from "react-table";  
// import "react-table/react-table.css";  
  
// class Details extends Component {  
//   render() {  
//       const data = [{  
//           name: 'Ayaan',  
//           age: 26  
//           },{  
//           name: 'Ahana',  
//           age: 22  
//           },{  
//           name: 'Peter',  
//           age: 40      
//           },{  
//           name: 'Virat',  
//           age: 30  
//           },{  
//           name: 'Rohit',  
//           age: 32  
//           },{  
//           name: 'Dhoni',  
//           age: 37  
//           }]  
//       const columns = [{  
//         Header: 'Name',  
//         accessor: 'name'  
//         },{  
//         Header: 'Age',  
//         accessor: 'age'  
//         }]  
//     return (  
//           <div> hiii 
//                   <ReactTable  
//             data={data}  
//             columns={columns}  
//             defaultPageSize = {2}  
//             pageSizeOptions = {[2,4, 6]}  
//          />  
//           </div>        
//     )  
//   }  
// }  
// export default Details;  