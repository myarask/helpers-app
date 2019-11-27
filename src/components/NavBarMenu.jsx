import React, { useContext } from 'react';
import { AppContext } from 'contexts';
import { IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

const NavBarMenu = () => {
  const { setMenuOpen } = useContext(AppContext);

  return (
    <IconButton onClick={() => setMenuOpen(true)}>
      <Menu style={{ color: 'white' }} />
    </IconButton>
  );
};

export default NavBarMenu;
