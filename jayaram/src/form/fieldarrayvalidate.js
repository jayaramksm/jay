import React from 'react';
import { Formik, Field, getIn, FastField, Form, ErrorMessage, useFormikContext, FieldArray } from 'formik';
import * as Yup from 'yup';

const FieldComponent = ({ field, form: { touched, errors } }) => {
    const error = getIn(errors, field.name);
    const touch = getIn(touched, field.name);
    return (
      <div>
        <input type="text" name={field.name}  />
        {touch &&error? <p>{error}</p> : null}
      </div>
    )
  }



function FieldarrayComponent() {
    const initialValues = {
        username:[ { fname: "", lname: "" }]
    }
    const validationSchema =Yup.object().shape({
        username:Yup.array().of(
            Yup.object().shape({
                fname:Yup.string().required("required"),
                fname:Yup.string().required("required")
            })
        )
    })
    
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={values => console.log(values)} >
                   {props => (
                    <Form>
                        {console.log("formik props  ====",props)}
                        <FieldArray name="username" >
                    {fieldArrayprops => {
                        const { push, remove, form } = fieldArrayprops;
                        console.log("fieldarray --props ==>",fieldArrayprops)
                        const { values } = form
                        const { username } = values;
                       
                        return (
                            <div>
                                { username.map((val, ind) => {
                                   
                                    return (<div key={ind}>
                                        <Field type="tel" className=" w-25 mt-4"  name={`username.${ind}.fname`}  />
                                        <ErrorMessage name={`username.${ind}.fname`} component="div" className="text-danger" />
                                      
                                        <Field type="tel" className=" w-25 mt-4"  name={`username.${ind}.lname`}  />
                                        <ErrorMessage name={`username.${ind}.lname`} component="div" className="text-danger" />
                                        {ind > 0 &&
                                            <button type="button" onClick={() => remove(ind)}>
                                                {''}
                                        - </button>}
                                        <button type="button" onClick={() => push({ fname: '',lname:''})}>

                                            +{''}</button>
                                            {/* {errorMessage ? <div>error</div>: null } */}
                                       
                                    </div>)
                                })}
                            </div>
                        )
                    }}
                </FieldArray>
               
                    <button type ="submit">submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );

}

export default FieldarrayComponent;