import React from 'react';
import axios from 'utils/axios';
import { SESSIONS } from 'constants/apis';
import { Box, Button } from '@material-ui/core';
import { FormTextField } from 'components';
import { Formik, ErrorMessage, Form, Field } from 'formik';

const LoginForm = props => (
  <Formik
    initialValues={{ email: '', password: '' }}
    validate={values => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      return errors;
    }}
    onSubmit={(values, { setSubmitting, setErrors }) => {
      const options = {
        auth: {
          username: values.email,
          password: values.password,
        },
      };
      return axios
        .post(SESSIONS, {}, options)
        .then(resp => props.setAppState({ userId: resp.data.userId }))
        .catch(e => {
          const errors = {};

          if (e.response.status === 401) {
            errors.email = 'Incorrect password';
          } else if (e.response.status === 404) {
            errors.password = 'Incorrect email';
          }

          setErrors(errors);
          setSubmitting(false);
        });
    }}
  >
    {({ isSubmitting }) => (
      <Form>
        {/* <FormTextField fullWidth type="email" name="email" margin="normal" label="Email" /> */}
        <Field fullWidth type="email" name="email" margin="normal" label="Email" component={FormTextField} />
        <ErrorMessage name="email" />
        {/* {errors.email && touched.email && errors.email} */}
        {/* <FormTextField fullWidth type="password" name="password" margin="normal" label="Password" /> */}
        <Field fullWidth type="password" name="password" margin="normal" label="Password" />
        {/* {errors.password && touched.password && errors.password} */}
        <ErrorMessage name="password" />
        {/* <Box mt={3}> */}
        <Button fullWidth type="submit" disabled={isSubmitting}>
          Login
        </Button>
        {/* </Box> */}
      </Form>
    )}
  </Formik>
);

export default LoginForm;
