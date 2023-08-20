import React, { ReactNode, useState } from 'react';
import { Box, Button, List, ListItemButton, ListItemIcon, Typography } from '@mui/material';
import { Close, Home, LibraryAdd, Menu, Person } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

type OptionsSideBarType = {
  path: string;
  label: string;
  icon: ReactNode;
}

export const SideBar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(true);
  const toggleMenu = () => setOpen(!open);
  const navigate = useNavigate();

  const optionsSidebar: OptionsSideBarType[] = [
    { 
      label: "Início", 
      icon: <Home sx={{ color: 'white', width: 30, height: 30 }} />, 
      path: '/' 
    }, 
    { 
      label: "Adicioanar", 
      icon: <LibraryAdd sx={{ color: 'white', width: 30, height: 30 }} />, 
      path: '/teste3' 
    }, 
    { 
      label: "Meu perfil", 
      icon: <Person sx={{ color: 'white', width: 30, height: 30 }} />, 
      path: '/teste' 
    }, 
  ]

  const widthSx: string = open ? "w-[300px]" : "w-[95px]";

  return (
    <Box className={`bg-[#15171a] h-screen block duration-300 text-center ${widthSx}`}>

      <List component="nav" className='text-center justify-center '>
        {optionsSidebar.map(({ icon, label, path }) => (
          <ListItemButton
            className='items-center text-center m-auto'
            sx={{m: '10px 0' }}
            onClick={(event) => navigate(path)}
          >
            <ListItemIcon
            className='duration-300'
              sx={{ ml: !open ? 2 : 0 }}
            >
              {icon}
            </ListItemIcon>
            {open &&
              <Typography
                className='text-white'
                sx={{ fontSize: 20, ml: -1 }}
              >{label}
              </Typography>
            }
          </ListItemButton>
        ))}
      </List>
      <Button onClick={toggleMenu} color='warning'>
        {open ? <Close /> : <Menu />}
      </Button>
    </Box>
  );
}