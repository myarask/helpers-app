import React from 'react';
import Belt from 'components/Belt';
import { AppBar, Button, Toolbar, Typography, IconButton, Menu, MenuItem } from '@material-ui/core';
import { AccountCircle, ChevronLeft } from '@material-ui/icons';
import logo from 'assets/transparent_logo.png';

const NavBar = props => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onLogout = () => {
    setAnchorEl(null);
    props.setAppState({ isLoggedIn: false });
  };

  const { pathname } = props.history.location;

  return (
    <AppBar position="static">
      <Toolbar>
        {pathname === '/login' && <img src={logo} alt="Helpers" height="40px" />}
        {(pathname === '/' || pathname === '/service-request') && (
          <Button style={{ color: 'white' }}>
            <ChevronLeft />
            <Typography> Back</Typography>
          </Button>
        )}

        <Belt>
          <div />
          <div>
            <IconButton onClick={handleMenu}>
              <AccountCircle style={{ color: 'white' }} />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={isMenuOpen}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={onLogout}>Logout</MenuItem>
            </Menu>
          </div>
        </Belt>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
