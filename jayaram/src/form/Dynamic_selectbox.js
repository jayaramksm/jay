import React from 'react';
import axios from 'axios'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
 
class Formik_boxComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            states: [],
            cities: [],
            selectedCountry: '--Choose Country--',
            selectedState: '--Choose State--',
            selectedcity: '-Choose cities',
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
            select_county: true,
            selectedcity: '-Choose cities'
        });
        this.setState({ states: this.state.countries.find(cntry => cntry.name === event.target.value).state });

        console.log("selected state =>", this.state.countries.find(cntry => cntry.name === event.target.value).state)
    }

    changeState(event) {
        this.setState({
            selectedState: event.target.value,
            select_state: true,
        });
        const stats = this.state.countries.find(cntry => cntry.name === this.state.selectedCountry).state;
        this.setState({ cities: stats.find(stat => stat.name === event.target.value).citys });
        console.log("selected  state show ==>..", this.state.cities)
    }
    initialValues = {
        country: "",
        state: "",
        city: ""
    }
    validationSchema = Yup.object({
        country: Yup.string().required("Required"),
        state: Yup.string().required("Required"),
        city: Yup.string().required("Required")
    })
    submit = (values, actions) => {

        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);

    }
    render() {
        return (
            <div id="container" >
                <Formik
                    initialValues={this.initialValues}
                    validationSchema={this.validationSchema}
                    onSubmit={this.submit} >
                    <Form className="d-flex justify-content-around mt-4" >
                        <Field value={this.state.selectedCountry} onChange={this.changeCountry} className="form-control w-25 " as="select" name="country">
                            <option>--Choose country--</option>
                            {this.state.countries.map((e, key) => {
                                return <option value={e.name} key={key}>{e.name}</option>;
                            })}
                        </Field>
                      
                        <ErrorMessage name="country" />

                        <Field value={this.state.selectedState} onChange={this.changeState} className="form-control w-25 " as="select" name="state">
                            <option>--Choose state--</option>
                            {this.state.states.map((e, key) => {
                                return <option value={e.name} key={key}>{e.name}</option>;
                            })}
                        </Field>

                        <Field className="form-control w-25 " as="select" name="city">
                            <option>--Choose City--</option>
                            {this.state.cities.map((e, key) => {
                                return <option value={e.name} key={key}>{e}</option>;
                            })}
                        </Field>
                        <button type="submit"> submit</button>
                    </Form>
                </Formik>

            </div>
        )
    }
}

export default Formik_boxComponent;
