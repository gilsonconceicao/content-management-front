import { Button, Stack } from '@mui/material'
import { TextFormField } from 'Components/Forms/TextFormField/TextFormField'
import React from 'react'

type PostManualFormProps = {
  onClose: () => void
}

export const PostManualForm = ({ onClose }: PostManualFormProps) => {
  return (
    <Stack spacing={2} mt={2}>
      <TextFormField
        label='Título'
        name='title'
      />
      <TextFormField
        label='Descrição'
        name='description'
      />
      <Button type='submit' variant='contained'>Enviar</Button>
      <Button onClick={onClose} variant='outlined'>Cancelar</Button>
    </Stack>
  )
}