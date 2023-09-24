import { Button, Stack } from '@mui/material'

export const CreatePost = () => {
  return (
    <Stack spacing={2} mt={2}>
      {/* <TextFormField
        label='Título'
        name='title'
      />
      <TextFormField
        label='Descrição'
        name='description'
      /> */}
      
      <Button variant='contained'>Salvar</Button>
      <Button variant='outlined'>Fechar</Button>
    </Stack>
  )
}