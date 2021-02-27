import React from 'react';
import axios from 'axios'
class Select_boxComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			countries: [],
			states: [],
			cities: [],
			selectedCountry: '--Choose Country--',
			selectedState: '--Choose State--',
			select_county: false,
			select_state: false
		};
		this.changeCountry = this.changeCountry.bind(this);
		this.changeState = this.changeState.bind(this);
	}

	componentDidMount() {
		axios.get('http://localhost:4200/selectbox')
			.then(res => {
				this.setState({
					countries: res.data
				});
			})

	}

	changeCountry(event) {
		this.setState({
			selectedCountry: event.target.value,
			select_county: true
		});
		this.setState({ states: this.state.countries.find(cntry => cntry.name === event.target.value).state });
		console.log("selected state =>", this.state.countries.find(cntry => cntry.name === event.target.value).state)
	}

	changeState(event) {
		this.setState({
			selectedState: event.target.value,
			select_state: true
		});
		const stats = this.state.countries.find(cntry => cntry.name === this.state.selectedCountry).state;
		this.setState({ cities: stats.find(stat => stat.name === event.target.value).citys });
		console.log("selected  state show ==>..", this.state.cities)
	}

	render() {
		return (
			<div id="container" className="d-flex justify-content-around mt-4">

				<div>
					<label>Country : </label>
					<select placeholder="Country" value={this.state.selectedCountry} onChange={this.changeCountry}>
						<option>--Choose Country--</option>
						{this.state.countries.map((e, key) => {
							return <option key={key}>{e.name}</option>;
						})}
					</select>
				</div>

				<div>
					<label>State : </label>
					<select placeholder="State" value={this.state.selectedState} onChange={this.changeState}>
						<option>--Choose State--</option>
						{this.state.states.map((e, key) => {
							return <option key={key}>{e.name}</option>;
						})}
					</select>
				</div>

				<div>
					<label>City : </label>
					<select placeholder="City">
						<option>--Choose City--</option>
						{this.state.cities.map((e, key) => {
							return <option key={key}>{e}</option>;
						})}
					</select>
				</div>
			</div>
		)
	}
}

export default Select_boxComponent;



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