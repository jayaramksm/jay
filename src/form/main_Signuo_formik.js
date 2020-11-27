import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Formik_boxComponent from './Dynamic_selectbox';
import PrimarySearchAppBar from '../my-project/header';
import Navbar from '../my-project/nav';

function Main_formikComponent() {
    const [input_values, setinput_values] = useState()
    const initialValues = {
        firstName: '', lastName: '',
        email: '', phone: '', color: '', checked: [], radioGroup: ''
    }
    const validationSchema = Yup.object({
        firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
        lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        phone: Yup.string()
            .min(10, 'Must be 10 characters')
            .max(10, 'Must be 10 characters')
            .required('Required'),
        color: Yup.string().oneOf(["red", "green", "blue"]).required('Required'),
        // Yup.string().required('Required'),
        checked: Yup.array().required('Permission not checked').min(1),
        // Yup.string().oneOf([true], ' must be accept')
        //  Yup.boolean()
        // .oneOf([true]) .required( 'Must Accept Terms and Conditions'),
        radioGroup: Yup.string().required("A radio option is required")
    })
    const submit = (values, { setSubmitting }) => {
        setinput_values(values)

    }

    console.log(input_values)

    return (
        <div className="mb-5">
            <PrimarySearchAppBar/>
            <Navbar/>
            <div className="sign mt-5 d-flex justify-content-around">

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={submit} >

                    <Form className="w-50">
                        <label htmlFor="firstName" >First Name : </label>
                        <Field name="firstName" className="form-control" type="text" />
                        <ErrorMessage className="text-danger" component="div" name="firstName" />

                        <label htmlFor="lastName" >Last Name</label>
                        <Field name="lastName" className="form-control" type="text" />
                        <ErrorMessage className="text-danger" component="div" name="lastName" />

                        <label htmlFor="email" >Email Address</label>
                        <Field name="email" className="form-control" type="email" />
                        <ErrorMessage className="text-danger" component="div" name="email" />

                        <label htmlFor="phone" > Enter Your Number </label>
                        <Field name="phone" className="form-control " type="number" />
                        <ErrorMessage className="text-danger" component="div" name="phone" />

                        <label htmlFor="color" className="mt-2">Select Your Favourit Color : </label>
                        <Field className="form-control " as="select" name="color">
                            <option value="red">Red</option>
                            <option value="green">Green</option>
                            <option value="blue">Blue</option>
                        </Field>
                        <ErrorMessage className="text-danger" component="div" name="color" />

                        <label htmlFor="checked" className="mt-2 pr-1"> one </label>
                        <Field type="checkbox" className="mr-3" name="checked" value="One" />
                        <label htmlFor="checked" className="pr-1"> two </label>
                        <Field type="checkbox" className="mr-3" name="checked" value="two" />
                        <label htmlFor="checked" className="pr-1"> three </label>
                        <Field type="checkbox" className="mr-2" name="checked" value="three" />
                        <ErrorMessage name="checked" component="div" className="text-danger" />

                        <div>
                            <label htmlFor="radioGroup" className="pr-1">male</label>
                            <Field name="radioGroup" className="mr-2" type="radio" value="male" />
                            <label htmlFor="radioGroup" className="pr-1">female</label>
                            <Field name="radioGroup" type="radio" value="female" />
                            <ErrorMessage component="div" name="radioGroup" className="text-danger" />
                        </div>
                        <div className="mt-3 text-right">
                            <button className="btn btn-primary" disabled={Formik.isvalid} > Submit </button>
                        </div>
                    </Form>
                </Formik>
                <div>
                    {input_values ? <ul className="list-group">
                        <li className="list-group-item text-center">FirstName : <strong> {input_values.firstName}</strong></li>
                        <li className="list-group-item text-center">LastName : <strong> {input_values.lastName}</strong></li>
                        <li className="list-group-item text-center">Email : <strong>  {input_values.email}</strong></li>
                        <li className="list-group-item text-center">Phone Number : <strong>  {input_values.phone}</strong></li>
                        <li className="list-group-item text-center">Selected Color  : <strong>  {input_values.color}</strong></li>
                        {input_values.checked.map((val, ind) => {
                            return (
                                <li key={ind} className="list-group-item text-center">Your Checked Values {ind + 1} : <strong>  {val}</strong></li>
                            )
                        })}
                        <li className="list-group-item text-center">Gender : <strong>  {input_values.radioGroup}</strong></li>
                    </ul> : <h2 className="text-danger"> Please Submit Inputvalues</h2>}
                </div>
            </div>
            <Formik_boxComponent />
        </div>
    )
}

export default Main_formikComponent
