import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
import{Link} from 'react-router-dom'
import Details from './show logindetails';
function Signup (props)  {

 
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: "",
      confirmPassword : ""
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
    .required('Please Enter your password')
    .matches(
      "^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$",
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  confirmPassword: Yup
    .string()
    .required()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    }),
    onSubmit: values => {
      props.history.push('/login')
console.log(values)
  axios.post('http://localhost:4200/employees',values)
  .then(res=>{
      console.log(res)
    
     
  })
  .catch(error=>{
      alert("Network error")
      console.log(error)
  })

  
    },
  });


  return (
    <div>
   <marquee  scrollamount="30"> <div className="App">
  <h1 className="text-primary  ">WELCOME TO  VECTRAMAIND</h1>
     
     </div></marquee >
    

    <div className="w-25 p-3 m-auto sing">
    <div className="text-center">
                           <h3 className="mt-1 text-danger">Creat Account</h3>
                       </div>
    <form className=" " onSubmit={formik.handleSubmit}>

      <label  className="m-0 p-0" htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        type="text"
        className="form-control"
        {...formik.getFieldProps('firstName')}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div className="text-danger">{formik.errors.firstName}</div>
      ) : null}


      <label  className="mt-3" htmlFor="lastName">Last Name</label>
      <input id="lastName" type="text" className="form-control " {...formik.getFieldProps('lastName')} />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div className="text-danger">{formik.errors.lastName}</div>
      ) : null}
      <label className="mt-3" htmlFor="email">Email Address</label>
      <input id="email" type="email" className="form-control " {...formik.getFieldProps('email')} />
      {formik.touched.email && formik.errors.email ? (
        <div className="text-danger">{formik.errors.email}</div>
      ) : null}


      <label className="mt-3" htmlFor="password">password</label>
      <input id="password" type="password" className="form-control " {...formik.getFieldProps('password')} />
      {formik.touched.password && formik.errors.password ? (
        <div className="text-danger">{formik.errors.password}</div>
      ) : null}


      <label className="mt-3" htmlFor="confirmPassword">confirmPassword</label>
      <input id="confirmPassword" type="password" className="form-control " {...formik.getFieldProps('confirmPassword')} />
      {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
        <div className="text-danger">{formik.errors.confirmPassword}</div>
      ) : null}


      <button className="mt-3 form-control btn btn-success" type="submit">Submit</button>

      <div>You Have Alredy Account ?   <Link to="/login" className="text-primary">Login</Link></div>
    </form>
    </div>
    </div>
  );
      }










//   const formik = useFormik({
//     initialValues: {
//       firstName: 'jayaram',
//       lastName: '',
//       email: '',
//     },

//     validationSchema: Yup.object({
//       firstName: Yup.string()
//         .max(15, 'Must be 15 characters or less')
//         .required('Required'),
//       lastName: Yup.string()
//         .max(20, 'Must be 20 characters or less')
//         .required('Required'),
//       email: Yup.string().email('Invalid email address').required('Required'),
//     }),
//     onSubmit: values => {
//       alert(JSON.stringify(values, null, 2));

//     },
//   });
//   console.log(formik.values)
//   return (
//     <div>
//     <form className="p-2" onSubmit={formik.handleSubmit}>
//       <label className="m-0" htmlFor="firstName">First Name</label>
//       <input
//       className="form-control"
//         id="firstName"
//         name="firstName"
//         type="text"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.firstName}
//       />
//       {formik.touched.firstName && formik.errors.firstName ? (
//         <div className="text-danger">{formik.errors.firstName}</div>
//       ) : null}
//       <label className="m-0" htmlFor="lastName">Last Name</label>
//       <input
//       className="form-control mt-2"
//         id="lastName"
//         name="lastName"
//         type="text"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.lastName}
//       />
//       {formik.touched.lastName && formik.errors.lastName ? (
//         <div className="text-danger">{formik.errors.lastName}</div>
//       ) : null}
//       <label className="m-0" htmlFor="email">Email Address</label>
//       <input
//       className="form-control mt-2"
//         id="email"
//         name="email"
//         type="email"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.email}
//       />
//       {formik.touched.email && formik.errors.email ? (
//         <div className="text-danger">{formik.errors.email}</div>
//       ) : null}
//       <button className="form-control mt-2 w-25 btn btn-primary" type="submit">Submit</button>
//     </form>
//     <Details value={formik.values}/>
//     </div>
//   );
// };




















//   const validate = values => {
//     const errors = {};
//     if (!values.firstName) {
//       errors.firstName = 'Required';
//     } else if (values.firstName.length > 15) {
//       errors.firstName = 'Must be 15 characters or less';
//     }
  
//     if (!values.lastName) {
//       errors.lastName = 'Required';
//     } else if (values.lastName.length > 20) {
//       errors.lastName = 'Must be 20 characters or less';
//     }
  
//     if (!values.email) {
//       errors.email = 'Required';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//       errors.email = 'Invalid email address';
//     }
  
//     return errors;
//   };
  
//   const formik = useFormik({
//     initialValues: {
//       firstName: '',
//       lastName: '',
//       email: '',
//     },
//     validate,
//     onSubmit: values => {
//       console.log(values)
//     },
    
//   });
//   console.log(formik.values)

  
//   return (
//     <React.StrictMode>
//     <form onSubmit={formik.handleSubmit}>
//       <label htmlFor="firstName">First Name</label>
//       <input
//         id="firstName"
//         name="firstName"
//         type="text"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.firstName}
//       />
//         {formik.touched.firstName && formik.errors.firstName ? (
//          <div>{formik.errors.firstName}</div>
//        ) : null}
//       <label htmlFor="lastName">Last Name</label>
//       <input
//         id="lastName"
//         name="lastName"
//         type="text"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.lastName}
//       />
//         {formik.touched.lastName && formik.errors.lastName ? (
//          <div>{formik.errors.lastName}</div>
//        ) : null}
//       <label htmlFor="email">Email Address</label>
//       <input
//         id="email"
//         name="email"
//         type="email"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.email}
//       />
//         {formik.touched.email && formik.errors.email ? (
//          <div>{formik.errors.email}</div>
//        ) : null}
//       <button type="submit">Submit</button>
//     </form>
//     </React.StrictMode>
//   );
// };  
export default Signup