import React from 'react';
import { Formik, Field, Form, useField, useFormikContext } from 'formik';
import * as Yup from 'yup';

 function State_to_formikComponent (){
 const   {values,setFormikState} = useFormikContext();

 console.log("ppp == > ..." )

const countrychange = ()=>{
       
  alert("j")
}

 const initialValues = {
    country: "",
  
}
const validationSchema = Yup.object({
    country: Yup.string()
        .required('Required'),
})

const submit = (values, actions) => {

    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);

}
        return ( 
            <div >
<Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={submit} >
                 <Form className="mt-4 " >
                       <label  htmlFor="country">NAME</label>
                       <Field type="email"  className="form-control w-25 "  name="country"/>
                           {/* <option>--Choose country--</option> */}
                         
                       {/* </Field> */}
                       </Form>
            </Formik>
            </div>
         );

}
 
export default State_to_formikComponent;