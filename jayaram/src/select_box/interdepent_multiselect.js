import { ErrorMessage, Field, Form, Formik, getIn } from 'formik'
import React from 'react'
import Select from 'react-select'
import * as Yup from 'yup';
import React_csvComponent from '../react_csv/react_csv';

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

const countryhandlechange = ((value, act) => {

})


const InterDependent_MultiselectComponet = () => {
    const initialvalues = {
        select_options: options,
        name: [],
        setstate: [],
        originalstatevalues: "kkfdhigo nu iug i",
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
        ).required("Required").min(2, "2 must be select").nullable(),

        state: Yup.array().of(
            Yup.object().shape({
                value: Yup.string().required('Required'),
                label: Yup.string().required('Required')
            })
        ).required("Required").min(2, "2 must be select").nullable(),
        //   .min(2, "2 must be select")

        city: Yup.array().of(
            Yup.object().shape({
                value: Yup.string().required('Required'),
                label: Yup.string().required('Required')
            })
        ).required("Required").min(2, "2 must be select").nullable()

    })

    return (
        <div>
            <h1 className="text-center"> InterDependent_MultiselectComponet</h1>
            <Formik
                initialValues={initialvalues}
                validationSchema={validate}
                onSubmit={values => console.log("InterDependent_MultiselectComponet", values.name)}
            >
                {({ setFieldValue, handleBlur, setFieldTouched, isValid, values ,dirty}) => (
                
                   <Form>


                        <label>Select countrys</label>
                        <Select value={values.name} isMulti options={options} onChange={(val, act) => {
                            var xyz
                            var stateoptions = []

                            setFieldValue("name", val)
                            console.log("actions", act)

                            val && val.map((e, ind) => {
                                e && e.state.map((ind) => {
                                    var abc = [...stateoptions, ind]
                                    stateoptions = abc

                                    setFieldValue("setstate", stateoptions)
                                })


                            })

                            if (act.action == "remove-value") {
                                console.log(values.state)
                                const statevalue = values.state
                                xyz = act.option
                                var controlstateinput = []
                                var index
                                act.removedValue.state.map((e) => {
                                    values.state && values.state.map((val) => {

                                        if (e.value == val.value) {

                                             index = values.state.findIndex(element => element == e)
                                            console.log("find index of ", index)
                                            values.state.splice(index, 1)
                                            stateoptions.splice(index, 1)

                                            val.citys&&val.citys.map((item) => {
                                                console.log("change values",item)
                                                var ind = values.city.findIndex(element => element == item)
                                                values.city.splice(ind, 1)
                                                setFieldValue("city", values.city)
                                            })


                                        }

                                    })
                                    
                                    setFieldValue("state", values.state)
                                })

                                setFieldValue("setstate", stateoptions)


                                // console.log("check values ", values.state)
                                // console.log("through state to city",values.city )
                                // values.state && values.state.map((e) => {
                                //     console.log("through state ", e)
                                //     e.citys.map((v) => {
                                //         console.log("through state to city",values.city )

                                //                 var index = values.city.findIndex(element => element == v)
                                //                 console.log("find index of state .. ", index)
                                //                 values.city.splice(index, 1)
                                //                 values.cityoptions.splice(index, 1)

                                //     })

                                // }) 
                                //  setFieldValue("city", values.city)
                                // setFieldValue("cityoptions", values.cityoptions )



                            }
                        }} onBlur={() => setFieldTouched("name", true)} />
                        <ErrorMessage component="div" className="text-danger" name="name" />
                        <label className="mt-3">Select your states</label>
                        <Select withAll={true} onBlur={() => setFieldTouched("state", true)} value={values.state} isMulti options={values.setstate}
                            onChange={(val, act) => {
                                setFieldValue("state", val)
                                console.log("state values ......", val)


                                var setcityoptions = []


                                console.log("actions", act)

                                val && val.map((e, ind) => {
                                    console.log("city option values ", e)
                                    e && e.citys.map((ind) => {
                                        var abc = [...setcityoptions, ind]
                                        setcityoptions = abc

                                        setFieldValue("cityoptions", setcityoptions)
                                    })


                                })

                                if (act.action == "remove-value") {
                                    console.log(values.city)
                                    const statevalue = values.city
                                    var index
                                    var controlstateinput = []
                                    act.removedValue.citys.map((e) => {
                                        values.city && values.city.map((val) => {
                                            if (e.value == val.value) {
                                                index = values.city.findIndex(element => element == e)
                                                console.log("find index of ", index)
                                                values.city.splice(index, 1)
                                                setcityoptions.splice(index, 1)
                                            }

                                        })
                                        setFieldValue("city", values.city)
                                    })

                                    setFieldValue("cityoptions", setcityoptions)



                                }




                            }} />

                        <ErrorMessage component="div" className="text-danger" name="state" />


                        <label className="mt-3">Select your city</label>
                        <Select isMulti
                            onBlur={() => setFieldTouched("city", true)} value={values.city} options={values.cityoptions}
                            onChange={(val) => { setFieldValue("city", val) }} />
                        <ErrorMessage component="div" className="text-danger" name="city" />

                        <button className="btn btn-primary mt-2" type="submit" disabled={dirty&&! isValid}> submit</button>
                    </Form>
                )}
            </Formik>
            <React_csvComponent />
        </div>
    )
}
export default InterDependent_MultiselectComponet