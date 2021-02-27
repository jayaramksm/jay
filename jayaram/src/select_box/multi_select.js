import { ErrorMessage, Field, Form, Formik,getIn } from 'formik'
import React from 'react'
import Select from 'react-select'
import * as Yup from 'yup';

// const SelectField = ({
//     options,
//     field,
//     form,
// }) =>
// {  
//     const error = getIn(form.errors, field.name);
//   const touch = getIn(form.touched, field.name);
//     return(
//         <div>
//             {console.log("component ==>>>>>....",field.onBlur )}
//             <Select
//                 isMulti
                
//                 closeMenuOnSelect={false}
//                 options={options}
//                 name={field.name}
//                 value={options ? options.find(option => option.value === field.value) : ''}
//                 onChange={(option) => form.setFieldValue(field.name, option)}
//                 onBlur={field.onBlur}
                
//             />
//             {/* {touch && error ? <div className="">{error}</div> :text-danger null} */}

//         </div>
//     )
// }


const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]



const MultiselectComponet = () => {
    const initialvalues = {
        select_options: options,
        name: []
    }

    const validate = Yup.object({
        // select_options: Yup.string().required("required"),
        name: Yup.array().of(
            Yup.object().shape({
              value: Yup.string().required('Required'),
              label: Yup.string().required('Required')
            })
          ).required("reuired").min(2, "2 must be select").nullable()
        //   .min(2, "2 must be select")
    })


    return (
        <div>
            <h1 className="text-center">MultiselectComponet</h1>
            <Formik
                initialValues={initialvalues}
                validationSchema={validate}
                onSubmit={values => console.log(values)}
            >
{({setFieldValue,handleBlur,setFieldTouched,isValid,touched,values})=>(
                <Form>
                    {/* <Field name='name' component={SelectField} options={options} /> */}
                    <Select  onBlur={()=>setFieldTouched("name",true)}  onChange={(option) => setFieldValue("name", option)} isMulti options={options} />
                    <ErrorMessage name="name" component="div"  className="text-danger"/>
                    <button className="btn btn-primary mt-2" type="submit" disabled={touched && !isValid}> submit</button>
                </Form>
)}
            </Formik>

        </div>
    )
}
export default MultiselectComponet