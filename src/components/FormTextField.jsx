import React from 'react';
import { TextField } from '@material-ui/core';

const FormTextField = ({ field, form, ...props }) => {
  return <TextField {...field} {...props} />;
};

export default FormTextField;
