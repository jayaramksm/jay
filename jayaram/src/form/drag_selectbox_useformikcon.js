
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios'
import { Formik, Field, getIn, FastField, Form, ErrorMessage, useFormikContext, FieldArray, useFormik } from 'formik';
import * as Yup from 'yup';
import Dypendent_fieldComponent from './dypendentfields';
import { FormComponent } from './fieldArray';
import FieldarrayComponent from './fieldarrayvalidate';
import PrimarySearchAppBar from '../my-project/header';
import Navbar from '../my-project/nav';
import MultiselectComponet from '../select_box/multi_select';
import InterDependent_MultiselectComponet from '../select_box/interdepent_multiselect';
import InterDependent_Multiselect from '../select_box/interdepent_multiselect';


const Statevalue = () => {
    const { values, submitForm } = useFormikContext();
    const [resdata_three, setdata_three] = useState()
    useEffect(() => {
        axios.get('http://localhost:4200/selectbox')
            .then(res => {
                // const setvalue = res.data.map((val,ind)=>{
                //     return ( val.state.find(cntry => cntry.name === values.state).city)
                // })
                // setdata_three(setvalue)

                const setvalue = res.data.map((val, ind) => {
                    (val.state.map((val) => {
                        if (val.name == values.state) {
                            console.log("selected values in  === === == ", val);
                            setdata_three(val.citys)
                        }
                    }))
                })
                //    let setdata_three = res.data.find(cntry => cntry.state.find(state =>state.name === values.state))?.city
                console.log("let value  = ", setvalue)
            })

    }, [values])
    console.log("state value    ==>", values)
    const initialValues = {
        city: ""
    }
    const validationSchema = Yup.object({
        city: Yup.string()
            .required('Required'),
    })

    const submit = {}
    console.log(" state threee        ----------- ==>", resdata_three)
    return (<div>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={submit} >
            <Form className=" mt-4" >
                <Field className="form-control w-25 " as="select" name="city">
                    <option>--Choose country--</option>
                    {resdata_three && resdata_three.map((e, key) => {
                        return <option value={e} key={key}>{e}</option>;
                    })}
                </Field>
                <ErrorMessage name="city" component="div" className="text-danger" />
            </Form>
        </Formik>
    </div>)

}







const Countryvalue = () => {
    const { values, submitForm } = useFormikContext();
    const [resdata_two, setdata_two] = useState()
    useEffect(() => {
        axios.get('http://localhost:4200/selectbox')
            .then(res => {
                setdata_two(res.data.find(cntry => cntry.name === values.country)?.state)
            })
        // console.log("Countryvalue state ==>",resdata_two)
    }, [values])
    console.log("Countryvalue ==>", values)
    const initialValues = {
        state: "",
        // city :resdata_two
    }
    const validationSchema = Yup.object({
        state: Yup.string()
            .required('Required'),
    })

    const submit = {}
    return (<div>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={submit} >
            <Form className=" mt-4" >
                <Field className="form-control w-25 " as="select" name="state">
                    <option>--Choose country--</option>
                    {resdata_two && resdata_two.map((e, key) => {
                        return <option value={e.name} key={key}>{e.name}</option>;
                    })}
                </Field>
                <ErrorMessage name="state" component="div" className="text-danger" />
                <Statevalue />
            </Form>
        </Formik>
    </div>)

}


const FieldComponent = ({ field, form: { touched, errors } }) => {
    const error = getIn(errors, field.name);
    const touch = getIn(touched, field.name);
    return (
        <div>
            <input type="text" name={field.name} onChange={field.onChange} />
            { error ? <p>{error}</p> : null}
        </div>
    )
}








// const ErrorMessages = ({ name }) => (
//     <Field
//       name={name}
//       render={({ form }) => {
//         const error = getIn(form.errors, name);
//         const touch = getIn(form.touched, name);
//         return touch && error ? error : null;
//       }}
//     />
//   );
  
  // Usage




const Select_boxComponent = (props) => {
    // const [resdata, setdata] = useState()
    var setapi = useRef()
    // useEffect(() => {
    //     axios.get('http://localhost:4200/selectbox')
    //         .then(res => {
    //             setapi.current = res.data
    //             setdata(res.data)
    //             apidata = res.data
    //         })
    // }, [])
    // console.log("useref hook fun == >...", setapi)

    const abc = [
        {
            "name": "india",
            "state": [
                {
                    "name": "andhrapradesh",
                    "citys": [
                        "amalapuram",
                        "kakinada",
                        "rajamandry",
                        "vizag",
                        "vizayawada"
                    ]
                },
                {
                    "name": "telangana",
                    "citys": [
                        "hyderabad",
                        "waramgal"
                    ]
                },
                {
                    "name": "karnataka",
                    "citys": [
                        "benguluru",
                        "karnataka"
                    ]
                }
            ]
        },
        {
            "name": "aus",
            "state": [
                {
                    "name": "sidni",
                    "citys": [
                        "Adelaide ",
                        "south_aus",
                        "Newcastle ",
                        "Canberra ",
                        "anu_"
                    ]
                },
                {
                    "name": "victoria",
                    "citys": [
                        "Sydney ",
                        "Melbourne "
                    ]
                },
                {
                    "name": "south_aus",
                    "citys": [
                        "Brisbane ",
                        "Perth "
                    ]
                }
            ]
        },
        {
            "name": "america",
            "state": [
                {
                    "name": "new_jersey",
                    "citys": [
                        "New York",
                        "Los Angeles",
                        "Chicago",
                        "Houston"
                    ]
                },
                {
                    "name": "alaska",
                    "citys": [
                        "Florida",
                        "Washington"
                    ]
                },
                {
                    "name": "florida",
                    "citys": [
                        "Colorado",
                        "California"
                    ]
                }
            ]
        }
    ]

    // useEffect((prevProps) => {
    //     const { formik } = props;
    //     if (formik.values.country !== prevProps.formik.values.country) {
    //       formik.setFieldValue("city", "");
    //     }
    //   })
    // var countrychangeval =  null
    // const countrychange = (e)=>{
    //     countrychangeval = e.target.value
    // }

    const initialValues = {
        country: "",
        // phnumber: [{ name: "" }],
        test: abc,
        state: "",
        selectedstate: "",
        selectedcity: "",
        city: "",
        stateid: "",
        countryid : ""
    }
    const validationSchema = Yup.object({
        country: Yup.string()
            .required('Required'),
        state: Yup.string()
            .required('Required'),
        city: Yup.string()
            .required('Required'),
       
  
    })
    const submit = (values, actions) => {

        alert(JSON.stringify(" country name : " + values.country + ", state name : " + values.state + ", city name : " + values.city + "   "+values.phnumber.name));
        actions.setSubmitting(false);

    }

    // var abc =   ()=>{return( resdata.map((e, key) => {
    //     return <option value={e.name} key={key}>{e.name}</option>;
    // }) )}
    return (<div >
        <PrimarySearchAppBar/>
        <Navbar/>
        <div className="w-75 m-auto ">
        <h1> InterDependent Select </h1>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={submit}
        >
            {({ values, setFieldValue ,setFieldTouched}) =>
                (
                    <Form className="mt-4 " >
                        {console.log("formik props  ----== > ", values)}
                        <pre>{JSON.stringify(" country name : " + values.country + ", state name : " + values.state + ", city name : " + values.city)}</pre>
                        <Field onClick={()=>{setFieldValue("city","") ; setFieldValue("state","")
                               setFieldTouched("city",false); setFieldTouched("state",false)
                               }}  className="form-control w-25 " as="select" name="country">

                            <option >--Choose country--</option>
                            {console.log("fastfield who to work")}
                            {/* {values.city=""} */}
                            {values.test && values.test.map((e, key) => {

                                return <option value={e.name} key={key}>{e.name}</option>;
                            })}
                            {values.name = values.country}

                        </Field >
                        <ErrorMessage name="country" component="div" className="text-danger" />

                        <Field className="form-control w-25 mt-3" as="select" name="state">
                            <option>--Choose state--</option>
                            {values.test && values.test.map((e, key) => {

                                if (values.country == e.name) {
                                    values.stateid = e.name
                                    // if(values.name != values.stateid)
                                    // {
                                    //     alert("kuh")
                                    //     values.city = ""
                                    // }
                                    values.selectedstate = e.state;
                                    console.log("country value ==>", values.selectedstate)
                                }

                            })}
                            {values.selectedstate && values.selectedstate.map((val, ind) => {
                                return (<option value={val.name} key={ind}>{val.name}</option>)
                            })}
                            
                        </Field >
                        {(values.name != values.stateid)? values.city="":null}
                        <ErrorMessage name="state" component="div" className="text-danger" />
                        <Field className="form-control w-25 mt-3" as="select" name="city">
                            <option>--Choose state--</option>

                            {values.selectedstate && values.selectedstate.map((e, key) => {

                                if (values.state == e.name) {

                                    values.selectedcity = e.citys;
                                    // console.log("state value ==>", e)
                                }

                            })}
                            {values.state && values.selectedcity.map((val, ind) => {
                                return (<option  value={val} key={ind}>{val}</option>)
                            })}
                        </Field>
                        <ErrorMessage name="city" component="div" className="text-danger" />
                        {/* <Countryvalue /> */}
                       
                       

                        <button type="submit"> submit</button>
                    </Form>

                )}
        </Formik>
       
       <MultiselectComponet/>
       <InterDependent_MultiselectComponet/>
        <Dypendent_fieldComponent />
        <FormComponent />
    </div>
    </div>)
}



export default Select_boxComponent












// import React from 'react';
// import { useField, Form, FormikProps, Formik } from 'formik';


// const MyTextField = ({ label, ...props }) => {
//   const [field, meta, helpers] = useField(props);
//   return (
//     <>
//       <label>
//         {label}
//         <input {...field} {...props} />
//       </label>
//       {meta.touched && meta.error ? (
//         <div className="error">{meta.error}</div>
//       ) : null}
//     </>
//   );
// };

// const Example = () => (
//   <div>
//     <h1>My Form</h1>
//     <Formik
//       initialValues={{
//         email: '',
//         firstName: 'red',
//         lastName: '',
//       }}
//       onSubmit={(values, actions) => {
//         setTimeout(() => {
//           alert(JSON.stringify(values, null, 2));
//           actions.setSubmitting(false);
//         }, 1000);
//       }}
//     >

//         <Form>
//           <MyTextField name="firstName" type="text" label="First Name" />
//           <MyTextField name="lastName" type="text" label="Last Name" />
//           <MyTextField name="email" type="email" label="Email" />
//           <button type="submit">Submit</button>
//         </Form>

//     </Formik>
//   </div>
// );

// export default Example  errors,
                //   touched,
                //   status,
                //   dirty,
                //   handleChange,
                //   handleBlur,
                //   handleSubmit,
                //   isSubmitting,
                //   isValid,
                //   handleReset,
                //   setTouched 
                






                // const ErrorMessages = ({ name }) => (
                //     <Field
                //       name={name}
                //       render={({ form }) => {
                //         const error = getIn(form.errors, name);
                //         const touch = getIn(form.touched, name);
                //         return touch && error ? <div>kkguiut</div>: null;
                //       }}
                //     />
                //   );
            
                //   const FieldComponent = ({ field, form: { touched, errors } }) => {
                //     const error = getIn(errors, field.name);
                //     const touch = getIn(touched, field.name);
                //     return (
                //       <div>
                //         <input type="text" name={field.name} onChange={field.onChange} />
                //         {touched &&  field.name  ? <p>{error}</p> : null}
                //       </div>
                //     )
                //   }
                // phnumber: Yup.array()
                // .of(
                //   Yup.object().shape({
                //     name: Yup.string().required('Required'), // these constraints take precedence
                //     // salary: Yup.string().min(3, 'cmon').required('Required'), // these constraints take precedence
                //   })
                // )
                // .required('Must have friends') // these constraints are shown if and only if inner constraints are satisfied
                // .min(3, 'Minimum of 3 friends')
                
                
                
                // <FieldArray name="phnumber" >
                //         //     {fieldArrayprops => {
                        //         const { push, remove, form } = fieldArrayprops;
                        //         console.log(fieldArrayprops)
                        //         const { values } = form
                        //         const { phnumber } = values;
                        //         return (
                        //             <div>
                        //                 {phnumber.map((val, ind) => {
                        //                     return (<div key={ind}>
                        //                         <Field type="tel" className=" w-25 mt-4" name={`phnumber:${ind}.name`}  component={FieldComponent}/>
                        //                         {ind > 0 &&
                        //                             <button type="button" onClick={() => remove(ind)}>
                        //                                 {''}
                        //                 - </button>}
                        //                         <button type="button" onClick={() => push({ name: '' })}>

                        //                             +{''}</button>
                        //                              <ErrorMessage name="phnumber[0].name"   component="div" className="text-danger" /> 
                        //                     </div>)
                        //                 })}
                        //             </div>
                        //         )
                        //     }}
                        // </FieldArray>