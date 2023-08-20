import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import { Notifications } from '@mui/icons-material';
import React from 'react'

const Header: React.FC = () => {
  return (
    <Stack
      className='bg-[#15171a] p-2 items-center'
      direction='row'
      justifyContent='space-between'
    >
      <Box>
        <Typography className='text-white' sx={{fontSize: 20, fontStyle: 'italic'}}>Content Management System</Typography>
      </Box>
      <Box>
        <IconButton>
          <Notifications sx={{ color: 'white' }} />
        </IconButton>
        <Button sx={{color: 'white', border: 'white 1px solid', borderRadius: 1}}>
          Novo post
        </Button>
      </Box>
    </Stack>
  )
}

export default Header
