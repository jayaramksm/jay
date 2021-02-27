import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";
import { Formik, Field, getIn, FastField, Form, ErrorMessage, useFormikContext, FieldArray } from 'formik';
import * as Yup from 'yup';

// const multi = ((values)=>{
//   console.log("values ==..",values)
// return(
//   <div>
//   <MultiSelect
//         // options={options}
//         // value={selected}
//         // onChange={setSelected}
//         // labelledBy={"Select"}
//         />
     
       
//   </div>
// )
// })

const Exampleselect = () => {
  const options = [
    { label: "Grapes ", value: "grapes" },
    { label: "Mango ", value: "mango" },
    { label: "Strawberry ", value: "strawberry", disabled: true },
    { label: "Watermelon ", value: "watermelon" },
    { label: "Pear ", value: "pear" },
    { label: "Apple ", value: "apple" },
    { label: "Tangerine ", value: "tangerine" },
    { label: "Pineapple ", value: "pineapple" },
    { label: "Peach ", value: "peach" },
  ];
 
  const [selected, setSelected] = useState([]);
 const initialvalues = {
   select_options : options,
   selects : ""
 }



  return (
    <div>
      <Formik initialValues={initialvalues}>
        {({values})=>{
        <Form>
           {/* <Field className="form-control w-25 mt-3" as="select" name="selects" componet={multi} /> */}
           <MultiSelect
        options={values.select_options}
        value={values.selects}
        onChange={(e)=>values.selects = e.target.value}
        labelledBy={"Select"}
      />
          </Form>
        }}
      </Formik>
      <h1>Select Fruits</h1>
      <pre>{JSON.stringify(selected)}</pre>
     
    </div>
  );
};
 
export default Exampleselect;




{/* <MultiSelect
id='multiselect'
name='multi'
label='Select multiple options'
options={multiOptions}
value={values.multi}
onChange={setFieldValue}
onBlur={setFieldTouched}
touched={touched.multi}
error={errors.multi}
/> */}