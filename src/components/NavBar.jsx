import React from 'react';
import Belt from 'components/Belt';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import { ChevronLeft } from '@material-ui/icons';

const InvisibleIcon = () => (
  <IconButton style={{ visibility: 'hidden' }}>
    <ChevronLeft />
  </IconButton>
);

const NavBar = props => {
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const isMenuOpen = Boolean(anchorEl);

  // const handleMenu = event => setAnchorEl(event.currentTarget);
  // const handleClose = () => setAnchorEl(null);

  return (
    <AppBar position="static">
      <Toolbar style={{ position: 'relative' }}>
        <Belt style={{ width: '100%' }}>
          {props.padLeft && <InvisibleIcon />}
          {props.children}
          {props.padRight && <InvisibleIcon />}
        </Belt>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
