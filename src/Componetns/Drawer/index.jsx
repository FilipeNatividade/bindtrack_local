import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import { NavLink, useLocation } from 'react-router-dom';
import * as S from './style';

export const Drawer = () => {
  const [open, setOpen] = useState(true);

  const { pathname } = useLocation();

  return (
    <S.Container>
      <S.HeaderDrawer open={open}>
        <button onClick={() => setOpen(!open)}>
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </S.HeaderDrawer>
      <ul>
        <S.ListsMenu pageOpen={pathname === '/' && true}>
          <NavLink to={'/'}>
            <DashboardIcon />
            {open && 'Dashboard'}
          </NavLink>
        </S.ListsMenu>
        <S.ListsMenu pageOpen={pathname === '/settings' && true}>
          {localStorage.client ? (
            <NavLink to={'settings'}>
              <SettingsIcon />
              {open && 'Configuração'}
            </NavLink>
          ) : (
            <p>
              <SettingsIcon />
              {open && 'Configuração'}
            </p>
          )}
        </S.ListsMenu>
      </ul>
    </S.Container>
  );
};
