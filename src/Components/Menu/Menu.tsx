import React, { useState } from 'react';
import { Box, Button, List, ListItemButton, ListItemIcon, SvgIconTypeMap, Typography } from '@mui/material';
import { Close, Home, LibraryAdd, Menu, Person } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import { OverridableComponent } from '@mui/material/OverridableComponent';

type OptionsSideBarType = {
  path: string;
  label: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string; };
  isActive: boolean;
}

type ActiveRouteProps = {
  active: boolean,
  inner: string | null
} | undefined

export const SideBar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(true);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState<ActiveRouteProps>(undefined);
  const toggleMenu = () => setOpen(!open);

  const optionsSidebar: OptionsSideBarType[] = [
    {
      label: "Início",
      Icon: Home,
      path: '/',
      isActive: active?.inner === 'Início' || pathname === '/'
    },
    {
      label: "Meu perfil",
      Icon: Person,
      path: '/teste',
      isActive: active?.inner === 'Meu perfil'
    },
  ];

  const activeRouteSideBar = (currentTarget: EventTarget & HTMLDivElement, path: string) => {
    let innerText = currentTarget.innerText; 
    const item = innerText !== "" || !!innerText ? innerText : currentTarget.textContent;
    let getLabel = optionsSidebar.find(option => option.label === item);
    if (getLabel !== null) {
      setActive({
        active: true,
        inner: item
      });
      return navigate(path)
    }
  }

  const widthSx: string = open ? "w-[300px]" : "w-[95px]";

  return (
    <Box className={`bg-[#15171a] h-screen block duration-300 text-center ${widthSx}`}>
      <List component="nav" className='text-center justify-center' sx={{mt: 5}}>
        {optionsSidebar.map(({ Icon, label, path, isActive }) => (
          <ListItemButton
            className='items-center text-center m-auto'
            sx={{ m: '10px 0' }}
            onClick={({ currentTarget }) => activeRouteSideBar(currentTarget, path)}
          >
            <ListItemIcon
              className='duration-300'
              sx={{ ml: !open ? 2 : 0 }}
            >
              <Icon
                className={isActive ? 'animate-pulse' : ''}
                sx={{
                  color: isActive ? 'orangered' : 'white',
                  width: 30,
                  height: 30
                }}
              />
            </ListItemIcon>
            <Typography
              className={open ? 'block' : 'hidden'}
              sx={{ fontSize: 20, ml: -1, color: isActive ? 'orangered' : 'white' }}
            >{label}
            </Typography>
          </ListItemButton>
        ))}
      </List>
      <Button onClick={toggleMenu} color='warning'>
        {open ? <Close /> : <Menu />}
      </Button>
    </Box>
  );
}