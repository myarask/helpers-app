import React from 'react';
import axios from 'utils/axios';
import { SESSIONS } from 'constants/apis';
import { Box, Button } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import { Formik, Form, Field } from 'formik';

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
        .then(resp => props.setAppState({ userId: resp.data.userId, requesterId: resp.data.requesterId || null }))
        .catch(e => {
          const errors = {};

          if (e.response.status === 401) {
            errors.password = 'Incorrect password';
          } else if (e.response.status === 404) {
            errors.email = 'Incorrect email';
          }

          setErrors(errors);
          setSubmitting(false);
        });
    }}
  >
    {({ isSubmitting }) => (
      <Form>
        <Field fullWidth type="email" name="email" margin="normal" label="Email" component={TextField} />
        <Field fullWidth type="password" name="password" margin="normal" label="Password" component={TextField} />
        <Box mt={2}>
          <Button fullWidth type="submit" disabled={isSubmitting}>
            Login
          </Button>
        </Box>
      </Form>
    )}
  </Formik>
);

export default LoginForm;
