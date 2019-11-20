import React from 'react';
import Belt from 'components/Belt';
import { AppBar, Button, Toolbar, Typography, IconButton } from '@material-ui/core';
import { AccountCircle, ChevronLeft, Menu } from '@material-ui/icons';
import logo from 'assets/transparent_logo.png';
import links from 'constants/links';

const NavBar = props => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenu = event => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const { pathname } = props.history.location;

  return (
    <AppBar position="static">
      <Toolbar style={{ position: 'relative' }}>
        <Belt style={{ width: '100%' }}>
          <IconButton onClick={handleMenu}>
            <Menu style={{ color: 'white' }} />
          </IconButton>

          <img src={logo} alt="Helpers" height="40px" />

          <IconButton style={{ visibility: 'hidden' }}>
            <AccountCircle style={{ color: 'white' }} />
          </IconButton>
        </Belt>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
