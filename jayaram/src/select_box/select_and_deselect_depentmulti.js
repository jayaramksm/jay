
import { ErrorMessage, Field, Form, Formik, getIn } from 'formik'
import React from 'react'
import Select from 'react-select'
import * as Yup from 'yup';

const options = [
    {
        value: "india",
        state: [
            {
                value: "andhrapradesh",

                "citys": [
                    { value: "amalapuram", label: "amalapuram" },
                    { value: "kakinada", label: "kakinada" },
                    { value: "rajamandry", label: "rajamandry" },
                    { value: "vizag", label: "vizag" }

                ],
                label: "andhrapradesh"
            },
            {
                value: "telangana",

                "citys": [
                    { value: "hyderabad", label: "hyderabad" },
                    { value: "waramgal", label: "waramgal" }

                ],
                label: "telangana"
            }], label: 'india'
    },
    {
        value: "aus",
        state: [
            {
                value: "sidni",

                "citys": [
                    { value: "Adelaide", label: "Adelaide" },
                    { value: "south_aus", label: "south_aus" },
                    { value: "Newcastle", label: "Newcastle" },
                    { value: "Canberra", label: "Canberra" },
                    { value: "anu_", label: "anu_" },

                ], label: "sidni"
            },
            {
                value: "victoria",

                "citys": [
                    { value: "Sydney", label: "Sydney" },
                    { value: "Melbourne", label: "Melbourne" }
                ], label: "victoria"
            }], label: 'aus'
    },

    {
        value: "america",
        state: [
            {
                value: "new_jersey",
                "citys": [
                    { value: "New York", label: "New York" },
                    { value: "Los Angeles", label: "Los Angeles" },
                    { value: " Angeles", label: " Angeles" },
                    { value: "Los ", label: "Los " }


                ], label: "new_jersey"
            },
            {
                value: "alaska",
                "citys": [
                    { value: "Florida", label: "Florida" },
                    { value: "america city", label: "amaerica city" }

                ], label: "alaska"
            }], label: 'america'
    }
]



const InterDependent = () => {
    const initialvalues = {
        select_options: options,
        name: [],
        setstate: [],
        originalstatevalues: [],
        state: [],
        city: [],
        cityoptions: [],
        originalcityvalues: []

    }

    const validate = Yup.object({
        // select_options: Yup.string().required("required"),
        name: Yup.array().of(
            Yup.object().shape({
                value: Yup.string().required('Required'),
                label: Yup.string().required('Required')
            })
        ).required("reuired").min(2, "2 must be select").nullable(),

        state: Yup.array().of(
            Yup.object().shape({ 
                value: Yup.string().required('Required'),
                label: Yup.string().required('Required')
            })
        ).required("reuired").min(2, "2 must be select").nullable(),
        //   .min(2, "2 must be select")

        city: Yup.array().of(
            Yup.object().shape({
                value: Yup.string().required('Required'),
                label: Yup.string().required('Required')
            })
        ).required("reuired").min(2, "2 must be select").nullable()

    })

    return (
        <div>
            <h1 className="text-center">fefd InterDependent_MultiselectComponet</h1>
            <Formik
                initialValues={initialvalues}
                validationSchema={validate}
                onSubmit={values => console.log("InterDependent_MultiselectComponet", values.city, values.state, values.name)}
            >
                {({ setFieldValue, handleBlur, setFieldTouched, isValid, values }) => (
                    <Form>
                        {/* <pre>{JSON.stringify(" country name : " +JSON.stringify( values.name.value) + ", state name : " +JSON.stringify( values.state) )}</pre> */}
                        {/* <Field name='name' component={SelectField} options={options} /> */}
                        <label>Select countrys</label>
                        <Select value={values.name} closeMenuOnSelect={false} onBlur={() => setFieldTouched("name", true)} onChange={(option,fun) => {console.log("test onchange values ",fun)
                            console.log("country onchange state value check", values.state)
                            setFieldValue("name", option)
                            setFieldValue("setstate", [])
                            setFieldValue("originalstatevalues", [])
                            setFieldValue("state", '')
                            setFieldTouched('state', false)
                            setFieldTouched('city', false)
                            // values.state = []
                            setFieldValue("originalcityvalues", [])
                            setFieldValue("cityoptions", [])
                            setFieldValue("city", [])
                        }} isMulti options={options} isClearable={true} allowSelectAll />
                        <ErrorMessage name="name" component="div" className="text-danger" />

                        {options && options.map((e, key) => {
                            {
                                values.name && values.name.map((val, ind) => {

                                    if (val.value == e.value) {
                                        val.state.map((res, i) => {
                                            let statevalues = [...values.setstate, res]
                                            values.setstate = statevalues

                                            // values.setstate.push(res)
                                            // console.log("state mapp",statevalues)
                                        })
                                        //    let statevalues = [...values.setstate,val.state]
                                        //    values.setstate = statevalues
                                        console.log("state value ==>", values.setstate)
                                    }
                                })
                            }


                        })}


                        {values.setstate && values.setstate.map((val, ind) => {
                            let findex = values.setstate.indexOf(val)
                            let lindex = values.setstate.lastIndexOf(val)
                            if (findex == lindex) {

                                let abc = [...values.originalstatevalues, val]
                                values.originalstatevalues = abc
                            }
                        })

                        }

                        <label className="mt-2">Select states</label>
                        <Select closeMenuOnSelect={false} value={values.state} isSearchable onBlur={() => setFieldTouched("state", true)} onChange={(option) => {
                            setFieldValue("state", option)
                            setFieldValue("originalcityvalues", [])
                            setFieldValue("cityoptions", [])
                            setFieldValue("city", [])
                            setFieldTouched('city', false)
                        }} isMulti options={values.originalstatevalues} />
                        <ErrorMessage name="state" component="div" className="text-danger" />


                        {values.originalstatevalues && values.originalstatevalues.map((e, key) => {
                            {
                                values.state && values.state.map((val, ind) => {

                                    if (val.value == e.value) {
                                        val.citys.map((res, i) => {
                                            let cityvalues = [...values.cityoptions, res]
                                            values.cityoptions = cityvalues

                                            //     // values.setstate.push(res)
                                            //     // console.log("state mapp",statevalues)
                                        })
                                        //    let statevalues = [...values.setstate,val.state]
                                        //    values.setstate = statevalues
                                        console.log("citys value ==>", values.cityoptions)
                                    }
                                })
                            }


                        })}



                        {values.cityoptions && values.cityoptions.map((val, ind) => {
                            let findex = values.cityoptions.indexOf(val)
                            let lindex = values.cityoptions.lastIndexOf(val)
                            if (findex == lindex) {

                                let abc = [...values.originalcityvalues, val]
                                values.originalcityvalues = abc
                            }
                        })

                        }

                        <label className="mt-2">Select Citys</label>
                        <Select showCheckbox={false} closeMenuOnSelect={false} value={values.city} onBlur={() => setFieldTouched("city", true)} onChange={(option) => { setFieldValue("city", option) }} isMulti options={values.originalcityvalues} />
                        <ErrorMessage name="city" component="div" className="text-danger" />
                        <button className="btn btn-primary mt-2" type="submit" disabled={!isValid}> submit</button>
                    </Form>
                )}
            </Formik>

        </div>
    )
}
export default InterDependent