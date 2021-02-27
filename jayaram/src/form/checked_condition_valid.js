import { Formik, Field, getIn, FastField, Form, ErrorMessage, useFormikContext, FieldArray } from 'formik';
import * as Yup from 'yup';
import React from 'react';

function Checked_conditionvalidComponent() {
    const initialvalues = {
        checked: false,
        input: "",
        email: "",
        name: "",
        second: "",
        condition: "",
        check_condition: ""

    }
    const validationSchema = Yup.object({

        email: Yup.string().email('Invalid email address').required('Required '),
        name: Yup.string().required('Required'),
        input: Yup.string().required('Required'),
        checked: Yup.boolean().oneOf([true], ' must be accept'),
        check_condition: Yup.string().when("checked", {
            is: true,
            then: Yup.string().email('Invalid email address').required("Must enter email address"),
            otherwise:Yup.string().required("required")
            // .matches("/^[a-zA-Z]+$/",  "Enter Valid Name")
                .max(15,"to long"),

        }),
        condition: Yup.string().required('Required ')
        // checked: Yup.boolean().required('Permission not checked'),
        // checked: Yup.boolean().oneOf([true], ' must be accept')
        // //  Yup.boolean()
        // .oneOf([true]) .required( 'Must Accept Terms and Conditions'),

    })
    return (
        <div className="w-75 m-auto">
            <Formik initialValues={initialvalues} validationSchema={validationSchema}
                onSubmit={values => {
                    console.log(values);
                }}>
                {({ values, errors, touched}) => (
                    <Form className="mt-5 mb-5">

                        <Field type="checkbox" className="ml-5 checkbox" name="checked" />
                        <label> conditional  validation </label>
                        <Field name="check_condition" type="text" className="form-control w-25" />
                        <ErrorMessage name="check_condition" component="div" className="text-danger" />










                        <button className="btn btn-success mt-2" type="submit">submit</button>
                    </Form>
                )}
            </Formik>

        </div>
    )
}

export default Checked_conditionvalidComponent




// const alpha = /^[a-zA-Z_]+( [a-zA-Z_]+)*$/;

// const validation = Yup.object().shape({
//   firstName: Yup.string()
//     .matches(alpha, {message: "Enter Valid Name", excludeEmptyString: true })
//     .required()
//     .max(35),
// });


// {touched.condition && errors.condition ? <div>
//     {values.checked ? <div>
//         {values.condition.indexOf("@")? null : <div> enter valid input</div>}
//     </div>:<div>
//         { isNaN(values.condition) ? 
//             null : <div className="text-danger"> Only enter charecters</div>}
//         </div>}
// </div> :null}



{/* <ErrorMessage name="checked" /> */ }
    // {console.log("checked values ",values  )}
    // {values.checked ?
    //     <div><Field type="text" className="mt-5 form-control w-25 ml-5" placeholder="enter your name " name="name" />
    //         <ErrorMessage name="name" component="div" className="text-danger"/>
    //         {/* {touched.name && errors.name ? <div className="text-danger"> required</div> : null} */}
    //         {touched.name && isNaN(values.name) ? null : <div className="text-danger"> Only enter charecters</div>}
    //     </div> : <div><Field type="email" placeholder="enter your email " className="ml-5 form-control w-25" name="email" />
    //         {/* {touched.email && errors.email? <div className="text-danger"> required valid email</div>:null} */}

    //         <ErrorMessage name="email" component="div" className="text-danger" />
    //     </div>}

    // <Field type="text" placeholder="enter your phone number " className="mt-3 ml-5 form-control w-25" name="input" />
    // { touched.input && isNaN(values.input) ? <div className="text-danger"> Only enter numbers</div> : null}
    // <ErrorMessage name="input"  component="div" className="text-danger" />


    // <Field name="condition" className="mt-5 ml-5 form-control w-25" type="text"/>
    // {touched.condition && values.checked ? <div>
    //         {values.condition.indexOf("@") > 0 ? null : <div className="text-danger"> enter valid email </div>}</div>:null}

    //     {errors.condition && values.checked ? null:<div>
    //         { isNaN(values.condition) ? 
    //             null : <div className="text-danger"> Only enter charecters</div>}
    //         </div>}


