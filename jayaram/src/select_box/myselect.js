// import React from 'react';

// class Select_boxComponent extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			countries : [],
// 			states : [],
// 			cities : [],
// 			selectedCountry : '--Choose Country--',
// 			selectedState : '--Choose State--'
// 		};
// 		this.changeCountry = this.changeCountry.bind(this);
// 		this.changeState = this.changeState.bind(this);
// 	}
  
// 	componentDidMount() {
// 		this.setState({
// 			countries : [
// 				{ name: 'Germany', states: [ {name: 'A', cities: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn']} ] },
// 				{ name: 'Spain', states: [ {name: 'B', cities: ['Barcelona']} ] },
// 				{ name: 'USA', states: [ {name: 'C', cities: ['Downers Grove']} ] },
// 				{ name: 'Mexico', states: [ {name: 'D', cities: ['Puebla']} ] },
// 				{ name: 'India', states: [ {name: 'E', cities: ['Delhi', 'Kolkata', 'Mumbai', 'Bangalore']} ] },
// 			]
// 		});
// 	}
  
// 	changeCountry(event) {
// 		this.setState({selectedCountry: event.target.value});
// 		console.log("check data",this.state.countries)
// 		this.setState({states : this.state.countries.find(cntry => cntry.name === event.target.value).states});
//     console.log("selected state =>", this.state.countries.find(cntry => cntry.name === event.target.value).states)
//     }

// 	changeState(event) {
// 		this.setState({selectedState: event.target.value});
//         const stats = this.state.countries.find(cntry => cntry.name === this.state.selectedCountry).states;
//         console.log("selected  state show ==>..",this.state.countries.find(cntry => cntry.name === this.state.selectedCountry))
// 		this.setState({cities : stats.find(stat => stat.name === event.target.value).cities});
// 	}
	
// 	render() {
// 		return (
// 			<div id="container">
// 				<h2>Cascading or Dependent Dropdown using React</h2>
	
// 				<div>
// 					<label>Country</label>
// 					<select placeholder="Country" value={this.state.selectedCountry} onChange={this.changeCountry}>
// 						<option>--Choose Country--</option>
// 						{this.state.countries.map((e, key) => {
// 							return <option key={key}>{e.name}</option>;
// 						})}
// 					</select>
// 				</div>

// 				<div>
// 					<label>State</label>
// 					<select placeholder="State" value={this.state.selectedState} onChange={this.changeState}>
// 						<option>--Choose State--</option>
// 						{this.state.states.map((e, key) => {
// 							return <option key={key}>{e.name}</option>;
// 						})}
// 					</select>
// 				</div>
				
// 				<div>
// 					<label>City</label>
// 					<select placeholder="City">
// 						<option>--Choose City--</option>
// 						{this.state.cities.map((e, key) => {
// 							return <option key={key}>{e}</option>;
// 						})}
// 					</select>
// 				</div>
// 			</div>
// 		)
// 	}
// }

// export default Select_boxComponent;



// import React, { useEffect, useState } from 'react'; 

// import axios from 'axios'
// function Select_boxComponent(){
//     const [resdata,setdata]=useState(null)
//     useEffect(()=>{
//         axios.get('http://localhost:4200/selectbox')
//         .then(res => {
//           console.log("Select_boxComponent ====>>> res",res.data)
//             setdata(res.data)
//         })
//         .catch(error => {
//           alert("Network error")
//           console.log(error)
//         })
//     },[])

//     return(
//         <div>
//             <select>
//                 {/* {resdata ?resdata.country.map((val,ind)=>{ 
//                 return(<div>
//                     <option>{val}</option>
//                 </div>)}):<div>loading data</div>} */}
//             </select>
//         </div>
//     )
// }

// export default Select_boxComponent