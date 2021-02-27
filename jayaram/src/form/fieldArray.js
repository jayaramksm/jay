import React from 'react';
import { render } from 'react-dom';
import { Formik, getIn, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// interface Props {
//     data?: string;
//     onSubmit?: Function
//   }

//   interface IFormValues {
//     people: { name: string, surname: string }[]
//   }


const FieldComponent = ({ field, form: { touched, errors } }) => {
  console.log("fieldcomponent ==>", field)
  const error = getIn(errors, field.name);
  const touch = getIn(touched, field.name);
  return (
    <div>
      {/* <input className="form-control w-25 mt-2" type="text" {...field} /> */}
      <input className="form-control w-25 mt-2" type="text" name={field.name} onBlur={field.onBlur} onChange={field.onChange} />
      {touch && error ? <div className="text-danger">{error}</div> : null}
    </div>
  )
}

const FieldArrayComponent = (arrayHelpers) => (
  <div>
    {arrayHelpers.form.values.people.map((person, index) => (
      <div key={index}>
        <label>Enter your name</label>
        <Field name={`people.${index}.name`} component={FieldComponent} />
        <label>Enter your surname</label>
        <Field className="mb-3 " name={`people.${index}.surname`} component={FieldComponent} />
        {index > 0 ? <button type="button" className="btn btn-danger" onClick={() => arrayHelpers.remove(index)}>-</button> : null}
        <button type="button" className="btn btn-primary" onClick={() => arrayHelpers.push({ name: '', surname: '' })}>+</button>

      </div>
    ))}
    <div>

      <button type="submit">Submit</button>
    </div>
  </div>
)




export const FormComponent = (props) => {
  const initialValues = {
    people: [{ name: '', surname: '' }]
  }
  const schema = Yup.object().shape({
    people: Yup.array().of(
      Yup.object().shape({
        name: Yup.string().required('Required'),
        surname: Yup.string().required('Required')
      })
    ).min(3, "jii"),

  })
  return (
    <div className="mt-3">
      <h1>Field array</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={values => {
          console.log(values);
        }}
        validationSchema={schema}
        validateOnBlur={true}
        validateOnMount={true}
        render={({ values, errors }) => {
          console.log("formik values errors",);
          return <Form>
            <FieldArray
              name="people"
              component={FieldArrayComponent}
            />

          </Form>
        }}
      />
      {/* <FieldArrayComponent/> */}
    </div>
  )

}