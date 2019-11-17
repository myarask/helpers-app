import React from 'react';
import { Box, Button, TextField, Typography } from '@material-ui/core';
import { Formik } from 'formik';

const LoginForm = () => (
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
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
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
        {/* {errors.password && touched.password && errors.password} */}
        <Box mt={3}>
          <Button fullWidth margin="normal" type="submit" disabled={isSubmitting}>
            Login
          </Button>
        </Box>
      </form>
    )}
  </Formik>
);

export default LoginForm;
