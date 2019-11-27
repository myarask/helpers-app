import React from 'react';
import { SwipeableDrawer, Typography, ButtonBase, Box } from '@material-ui/core';
import Home from 'assets/menu/home-solid.svg';
import Profile from 'assets/menu/profile-solid.svg';
import Settings from 'assets/menu/settings-solid.svg';
import ServiceHistory from 'assets/menu/service-history-solid.svg';
import Privacy from 'assets/menu/privacy-solid.svg';

const MobileDrawerItem = props => (
  <ButtonBase style={{ justifyContent: 'left', width: '100%' }}>
    <Box p={1} display="flex">
      <Box mr={1}>
        <img src={props.src} alt={props.name} />
      </Box>
      <Typography>{props.name}</Typography>
    </Box>
  </ButtonBase>
);

const MobileDrawer = props => (
  <SwipeableDrawer open={props.open} onClose={props.onClose} onOpen={props.onOpen}>
    <Box p={1} style={{ width: 'calc(100% - 100px)' }}>
      <Typography variant="h1">Mark Yaraskavitch</Typography>
      <Typography>Rating</Typography>
      <MobileDrawerItem name="Home" src={Home} />
      <MobileDrawerItem name="Profile" src={Profile} />
      <MobileDrawerItem name="Settings" src={Settings} />
      <MobileDrawerItem name="Service History" src={ServiceHistory} />
      <MobileDrawerItem name="Privacy & Terms" src={Privacy} />
    </Box>
  </SwipeableDrawer>
);

export default MobileDrawer;
