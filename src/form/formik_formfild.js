
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';

const SignupForm = () => {
    return (
        <Formik
            initialValues={{ firstName: '', lastName: '', email: '', color: 'red', acceptTerms: false }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Required'),
                lastName: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required'),
                email: Yup.string().email('Invalid email address').required('Required'),
                color: Yup.string().required('Required'),
                acceptTerms: Yup.boolean()
                    .oneOf([true], 'Must Accept Terms and Conditions'),
                    color: Yup.string().oneOf(["green", "red", "blue"]).required()
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            <Form className="w-25 m-auto">
                <label htmlFor="firstName">First Name : </label>
                <Field name="firstName" className="form-control" type="text" />
                <ErrorMessage  name="firstName" />
                <label htmlFor="lastName">Last Name</label>
                <Field name="lastName" className="form-control" type="text" />
                <ErrorMessage component="div" name="lastName" />
                <label htmlFor="email">Email Address</label>
                <Field name="email" className="form-control" type="email" />
                <ErrorMessage component="div" name="email" />
                <Field className="form-control mt-2" as="select" name="color">
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                </Field>
                <ErrorMessage component="div" name="color" />
                <Field type="checkbox" name="checked" value="One" />
                <label htmlFor="acceptTerms">one</label>
                <Field type="checkbox" name="acceptTerms" className="form-check-group" />
                <ErrorMessage name="acceptTerms" component="div" className="invalid-feedback" />
                <input type="radio" name="myradio" value="green" />
                <input type="radio" name="myradio" value="red" />
                <input type="radio" name="myradio" value="blue" />
                <ErrorMessage name="myradio" component="div" className="invalid-feedback" />
                <Button type="submit" className="mt-3 " variant="contained" color="secondary">
                    Submit
                </Button>

            </Form>
        </Formik>
    );
};

export default SignupForm