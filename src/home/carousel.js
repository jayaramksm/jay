import React, { Component } from 'react';
import DatePickers from './date';
class Carousel extends Component {
    state = {  
       values:"date and time"
    }
    styles = {
        height:"350px"
    }
  
    inputs(data){
      var date = data
console.log(data+"hello")
var abc = data;

    }
   
 
    render() { 
        return ( 
<div className="container-fluid bg-primary">
    <div className="container bg-secondary">
        <img className="w-100" alt="img" style={this.styles} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBB_iNsHbCsXFw7tQ3clTLoUYcn29X6HKlwQ&usqp=CAU" />
   <div className="background">
       <div className="text-center m-auto">
           <h1 className="text-white bg-dark">
               RESERVATION
           </h1>
       </div>


       <div className="d-flex justify-content-around">
<DatePickers inputs={this.inputs} ></DatePickers>
<div className="bg-white text-center text-dark p-5">
<h1>
    Date and time 
</h1>
        <h2>{this.inputs.date}</h2>

</div>

       </div>

   </div>
    </div>
</div>
         );
    }
}
 
export default Carousel;