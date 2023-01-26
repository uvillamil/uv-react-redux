import React from 'react'
import PropTypes from 'prop-types'

import { Formik, Field, Form, ErrorMessage } from 'formik';

import * as yup from 'yup';

//import { redirect } from 'react-router-dom/dist/react-router-dom';
//import { OutlinedFlagOutlined } from '@mui/icons-material';

const loginSchema = yup.object().shape(
    {
        email: yup.string()
                  .email('Invalid email format')
                  .required('Email is required'),
        password: yup.string()
                  .required('password is required')
    }
);

const LoginForm = ({loged, fetching, onLogin}) => {

    const initialCredentials = {
        email: '',
        password: ''
    }

  return (
    <Formik
       
       //*** Initial values that the form will take */
           initialValues = { initialCredentials }
           //*** Yup validation Schema ***
           validationSchema = {loginSchema}
           //*** onSubmit Event ***
           onSubmit={async (values) => {
               onLogin(values.email, values.password)
        }}
        >
        {/* We obtein props from Formik*/}
        {({  values,
             touched,
             errors,
             isSubmitting,
             handleChange,
             handleBlur }) => (
                <Form>
                  <label htmlFor="email">Email</label>
                  <Field id="email" type='email' name="email" placeholder="example@email.com" />

                    {/*Email errors*/}
                   {
                    errors.email && touched.email && 
                    (
                        
                      <ErrorMessage name="email" component= 'div'></ErrorMessage>
                      
                    )
                   }
                  <label htmlFor="password">Password</label>
                <Field
                id="password"
                name="password"
                placeholder="password"
                type = 'password'
            />
            {/*Password errors*/}
            {
                    errors.password && touched.password && 
                    (
                        
                        <ErrorMessage name="password" component = 'div'></ErrorMessage>
                      
                    )
                   }
            <button type="submit">Login</button>
            { fetching ? (<p>LOADING...</p>) : null}
            {isSubmitting ? (<p>Login your credentials...</p>): null}
            </Form>
            )}
      
    </Formik>
  );
};

LoginForm.propTypes = {
   loged: PropTypes.bool.isRequired,
   fetchng: PropTypes.bool.isRequired,
   onLogin: PropTypes.func.isRequired
};

export default LoginForm;

