import React from 'react';
import { useFormik} from 'formik';
import './Formik.css';


const validate = values =>{
    const errors = {};
        if(!values.firstname){
            errors.firstname = '*first name is Required';
        }

        if(!values.lastname){
            errors.lastname = '*last name is Required';
        }

        if(!values.email){
            errors.email = '*email is Required';

        }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,4}$/i.test(values.email)) {
            errors.email = '*Invalid email address';
          }

        return errors;

};

const SighnupForm = ()=>{

        const formik = useFormik({
            initialValues:{
                firstname:'',
                lastname:'',
                email:''
            },
            validate,
            onSubmit:values=>{
                console.log('formik values',values);
            }



        });

        return(
            <div className="border" >
            <form onSubmit={formik.handleSubmit}>
            <div>&nbsp;</div>
                <label htmlFor="firstname">firstname</label>
                <div>&nbsp;</div>
                <input type="text" 
                id="firstname"
                name="firstname"
                onChange={formik.handleChange} 
                value={formik.values.firstname} />
                <div>&nbsp;</div>
                
                {formik.errors.firstname
                ?<div className="warning">
                    {formik.errors.firstname}
                    </div>:null}
                <label htmlFor="lastname">lastname</label>
                <div>&nbsp;</div>
                <input type="text"
                 id="lastname" 
                 name="lastname"
                  onChange={formik.handleChange} 
                  value={formik.values.lastname} />
                   <div>&nbsp;</div>
                  {formik.errors.lastname?<div className="warning">{formik.errors.lastname}</div>:null}
                <label htmlFor="email">email</label>
                <div>&nbsp;</div>
                <input type="text"
                 id="email" 
                 name="email" 
                 onChange={formik.handleChange} 
                 value={formik.values.email} />
                <div>&nbsp;</div>
                 {formik.errors.email?<div className="warning">{formik.errors.email}</div>:null}
                <button type="submit">submit</button>
            </form>
            <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
            </div>
        );

};

export default SighnupForm;