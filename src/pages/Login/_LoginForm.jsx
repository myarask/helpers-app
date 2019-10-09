import React from 'react';
import { Box, Button, TextField, Typography } from '@material-ui/core';

const LoginForm = props => (
  <form onSubmit={props.onSubmit}>
    {props.hasIncorrectPassword && <Typography>Error</Typography>}
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
      error={props.hasIncorrectCredentials}
      helperText={props.hasIncorrectCredentials && 'Email or password was incorrect'}
    />
    <Box mt={1}>
      <Button
        fullWidth
        variant="contained"
        color="primary"
        type="submit"
        disabled={props.email === '' || props.password === '' || props.isLoading}
      >
        Log In
      </Button>
    </Box>
  </form>
);

export default LoginForm;
