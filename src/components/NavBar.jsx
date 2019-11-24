import React from 'react';
import Belt from 'components/Belt';
import { AppBar, Toolbar } from '@material-ui/core';

const NavBar = props => {
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const isMenuOpen = Boolean(anchorEl);

  // const handleMenu = event => setAnchorEl(event.currentTarget);
  // const handleClose = () => setAnchorEl(null);

  return (
    <AppBar position="static">
      <Toolbar style={{ position: 'relative' }}>
        <Belt style={{ width: '100%' }}>{props.children}</Belt>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
