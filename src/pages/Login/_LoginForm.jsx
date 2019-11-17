import React from 'react';
import axios from 'utils/axios';
import { SESSIONS } from 'constants/apis';
import { Box, Button, TextField } from '@material-ui/core';
import { Formik } from 'formik';

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
    {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          type="email"
          name="email"
          margin="normal"
          label="Email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        {/* {errors.email && touched.email && errors.email} */}
        <TextField
          fullWidth
          type="password"
          name="password"
          margin="normal"
          label="Password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
        {errors.password && touched.password && errors.password}
        <Box mt={3}>
          <Button fullWidth type="submit" disabled={isSubmitting}>
            Login
          </Button>
        </Box>
      </form>
    )}
  </Formik>
);

export default LoginForm;
