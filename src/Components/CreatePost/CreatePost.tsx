import { Button, Stack } from '@mui/material'
import { TextFormField } from 'Components/Forms/TextFormField/TextFormField'

export const CreatePost = () => {
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
      
      <Button variant='contained'>Salvar</Button>
      <Button variant='outlined'>Fechar</Button>
    </Stack>
  )
}