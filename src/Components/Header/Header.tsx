import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import { Notifications } from '@mui/icons-material';
import React, { useState } from 'react'
import ModalCustom from 'Components/Modal/Modal';
import { CreatePost } from 'Components/CreatePost/CreatePost';

const Header: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <Stack
      className='bg-[#15171a] p-2 items-center'
      direction='row'
      justifyContent='space-between'
    >
      <Box>
        <Typography className='text-white' sx={{ fontSize: 20, fontStyle: 'italic' }}>Content Management System</Typography>
      </Box>
      <Box>
        <IconButton>
          <Notifications sx={{ color: 'white' }} />
        </IconButton>
        <Button
          onClick={() => setOpenModal(true)}
          sx={{
            color: 'white',
            border: 'white 1px solid',
            borderRadius: 1
          }}>
          Novo post
        </Button>
      </Box>
      <ModalCustom
        open={openModal}
        title='Criar nova publicação'
        onClose={() => setOpenModal(false)}
        children={<CreatePost />}
      />
    </Stack>
  )
}

export default Header
