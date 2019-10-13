import React from 'react';
import { AppBar, Button, Toolbar, Typography, IconButton, Menu, MenuItem } from '@material-ui/core';
import { AccountCircle, ChevronLeft } from '@material-ui/icons';
import logo from 'assets/transparent_logo.png';
import links from 'constants/links';

const NavBar = props => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenu = event => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const { pathname } = props.history.location;

  console.log(pathname, links.activeJob);
  console.log(pathname === links.activeJob);
  // console.log(pa);

  return (
    <AppBar position="static">
      <Toolbar style={{ position: 'relative' }}>
        {pathname === links.home && <img src={logo} alt="Helpers" height="40px" />}
        {[links.newRequest, links.incoming, links.activeJob].includes(pathname) && (
          <Button variant="text" onClick={props.onBackClick} style={{ color: 'white', paddingRight: '20px' }}>
            <ChevronLeft />
            <Typography>Back</Typography>
          </Button>
        )}

        <div style={{ position: 'absolute', right: '16px' }}>
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
            <MenuItem onClick={props.logout}>Logout</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
