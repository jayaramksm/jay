
 import React from 'react';
 import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';
 
 const FirstformikComponent = () => {
   return (
     <Formik
       initialValues={{ firstName: '', lastName: '', email: '' }}
       validationSchema={Yup.object({
         firstName: Yup.string()
           .max(15, 'Must be 15 characters or less')
           .required('Required'),
         lastName: Yup.string()
           .max(20, 'Must be 20 characters or less')
           .required('Required'),
         email: Yup.string().email('Invalid email address').required('Required'),
       })}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       <Form className="form-group">
         <label htmlFor="firstName">First Name</label>
         <Field name="firstName" className="form-control" type="text" />
         <ErrorMessage name="firstName" />
         <label htmlFor="lastName">Last Name</label>
         <Field name="lastName" type="text" />
         <ErrorMessage name="lastName" />
         <label htmlFor="email">Email Address</label>
         <Field name="email" type="email" />
         <ErrorMessage name="email" />
         <button type="submit">Submit</button>
       </Form>
     </Formik>
   );
 };


export default FirstformikComponent






//  import React from 'react';
//  import { useFormik } from 'formik';
 
//  const validate = values => {
//    const errors = {};
//    if (!values.firstName) {
//      errors.firstName = 'Required';
//    } else if (values.firstName.length > 15) {
//      errors.firstName = 'Must be 15 characters or less';
//    }
 
//    if (!values.lastName) {
//      errors.lastName = 'Required';
//    } else if (values.lastName.length > 20) {
//      errors.lastName = 'Must be 20 characters or less';
//    }
 
//    if (!values.email) {
//      errors.email = 'Required';
//    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//      errors.email = 'Invalid email address';
//    }
 
//    return errors;
//  };
 
//  const FirstformikComponent = () => {
//    const formik = useFormik({
//      initialValues: {
//        firstName: '',
//        lastName: '',
//        email: '',
//      },
//      validate,
//      onSubmit: values => {
//        alert(JSON.stringify(values, null, 2));
//      },
//    });
//    return (
//      <form onSubmit={formik.handleSubmit}>
//        <label htmlFor="firstName">First Name</label>
//        <input
//          id="firstName"
//          name="firstName"
//          type="text"
//          onChange={formik.handleChange}
//          onBlur={formik.handleBlur}
//          value={formik.values.firstName}
//        />
//        {formik.touched.firstName && formik.errors.firstName ? (
//          <div>{formik.errors.firstName}</div>
//        ) : null}
//        <label htmlFor="lastName">Last Name</label>
//        <input
//          id="lastName"
//          name="lastName"
//          type="text"
//          onChange={formik.handleChange}
//          onBlur={formik.handleBlur}
//          value={formik.values.lastName}
//        />
//        {formik.dirty.lastName && formik.errors.lastName ? (
//          <div>{formik.errors.lastName}</div>
//        ) : null}
//        <label htmlFor="email">Email Address</label>
//        <input
//          id="email"
//          name="email"
//          type="email"
//          onChange={formik.handleChange}
//          onBlur={formik.handleBlur}
//          value={formik.values.email}
//        />
//        {formik.touched.email && formik.errors.email ? (
//          <div>{formik.errors.email}</div>
//        ) : null}
//        <button type="submit">Submit</button>
//      </form>
//    );
//  };



// export default FirstformikComponent








// import { useFormik } from 'formik';
// import React from 'react';
// const validate = values => {
//     const errors = {};
//     if (!values.fname) {
//       errors.fname = 'Required';
//     } else if (values.fname.length > 15) {
//       errors.fname = 'Must be 15 characters or less';
//     }
  
//     if (!values.lname) {
//       errors.lname = 'Required';
//     } else if (values.lname.length > 20) {
//       errors.lname = 'Must be 20 characters or less';
//     }
  
//     if (!values.email) {
//       errors.email = 'Required';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//       errors.email = 'Invalid email address';
//     }
  
//     return errors;
//   };
// function FirstformikComponent() {
//     const formik = useFormik({
//         initialValues: {
//             fname: "",
//             lname: "",
//             email: "",
//             number: ""
//         },
//         validate,
//         onSubmit: (val) => {
//             console.log(val)
//         }
//     })
//     return (<div>
//         <form onSubmit={formik.handleSubmit}>
//             <label>Enter your name</label>
//             <input type="text" name="fname" onChange={formik.handleChange} value={formik.values.fname} />
//             {formik.errors.fname ? <div>{formik.errors.fname}</div> : null}
//             <label>Enter Your Lastname</label>
//             <input type="text" name="lname" onChange={formik.handleChange} value={formik.values.lname} />
//             {formik.errors.lname ? <div>{formik.errors.lname}</div> : null}
//             <label>Enter Your email</label>
//             <input type="email" name="email" onChange={formik.handleChange} value={formik.values.email} />
//             {formik.errors.email ? <div>{formik.errors.email}</div> : null}
//             <label>Enter Your number</label>
//             <input type="phone" name="number" onChange={formik.handleChange} value={formik.values.number} />
//             <input type="submit" value="submit" />
//         </form>
//     </div>)
// }

// export default FirstformikComponent