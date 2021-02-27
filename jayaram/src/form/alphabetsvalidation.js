import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup';
function Alphabetsvalidation() {


    // const optionalRequiredSchema = yup.object().shape({
    //     optionalObject: yup.lazy(value => {
    //       if (value !== undefined) {
    //         return yup.object().shape({
    //           otherData: yup.string().required(),
    //         });
    //       }
    //       return yup.mixed().notRequired();
    //     }),
    //   });
      


    const validate = Yup.object({



        name: Yup.lazy((value) => {
           if (value == undefined) {
                return Yup.string().required()
           }else{
              return Yup.string().notRequired();}
           
            // if (typeof value != 'Number'){
            //     return Yup.string().required("required")
            // }
            // switch (typeof value) {
            //   case 'number':
            //     return Yup.string().required("required").min(3);
            //   case 'string':
            //     return Yup.string().required("required");;
            
            // }
        
        // name: Yup.string()
        //     .required('First Name is required')
        //     .test('length', 'First Name must have more than 1 character', (value) => {
        //         return value && value.length > 2;
        //     })
        //     .test('alphabets', 'Name must only contain alphabets', (value) => {
        //         console.log(" jsacku");

                // return ('/^[A-Za-z]+$/'.test(value));
            })
    })
    return (
        <div>
            <Formik
                initialValues={{ name: '' }}
                validationSchema={validate}
                onSubmit={values => alert(JSON.stringify(values))}

            >
                <Form>
                    <Field name="name" type="text" />
                    <ErrorMessage className="text-danger" name="name" />
                    <button type="submit"> submit</button>
                </Form>

            </Formik>
        </div>
    )
}

export default Alphabetsvalidation