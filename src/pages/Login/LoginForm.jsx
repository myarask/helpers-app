import React from 'react';
import { Button, TextField } from '@material-ui/core';

const LoginForm = props => (
  <form onSubmit={props.onSubmit}>
    <TextField fullWidth label="Email" name="email" value={props.email} onChange={props.onChange} type="email" />
    <TextField
      fullWidth
      label="Password"
      type="password"
      autoComplete="current-password"
      name="password"
      value={props.password}
      onChange={props.onChange}
      margin="normal"
    />
    <Button
      fullWidth
      variant="contained"
      color="primary"
      type="submit"
      style={{ marginTop: '1rem' }}
      disabled={props.email === '' || props.password === ''}
    >
      Log In
    </Button>
  </form>
);

export default LoginForm;
