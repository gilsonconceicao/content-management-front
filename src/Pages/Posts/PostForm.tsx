import { PostAdd } from '@mui/icons-material'
import { Button, Chip, Grid, Stack } from '@mui/material'
import Autocomplete, { OptionSelect } from 'Components/Forms/Autocomplete/AutocompleteFormField';
import { useFormContext } from 'Contexts/FormContext';
import { PostType } from 'Services/posts/posts'
import React, { useMemo } from 'react'

type PostFormProps = {
  postOptionsList: OptionSelect[] | undefined;
  onAddPost: () => void;
  isAdd: boolean;
  postSelected: PostType | null;
  setPostId: React.Dispatch<React.SetStateAction<string | undefined>>
}

export const invalidValues = (value: string): boolean => {
  if (value === undefined || value === null || value === "") {
    return true
  }
  return false
}

export const PostForm = ({ postOptionsList, onAddPost, postSelected, setPostId, isAdd }: PostFormProps) => {
  const { watch, setValue } = useFormContext();
  const postId = watch('postId');

  useMemo(() => {
    if (!invalidValues(postId) && !isAdd) {
      setPostId(postId);
    }
    if (isAdd) {
      setValue('postId', postSelected?.title);
      setValue('postIdDisplay', postSelected?.title);
    }
  }, [postId, setPostId, isAdd]); 

  return (
    <Stack spacing={2} >
      <Autocomplete
        label='Selecione um post'
        name='postId'
        options={postOptionsList ?? []}
      />

      <Button
        variant='outlined'
        sx={{ width: 200 }}
        startIcon={<PostAdd />}
        onClick={onAddPost}
      >
        Adicionar post
      </Button>

      {postSelected &&
        <Grid direction='row' alignItems='center' >
          <Chip label={`Título: ${postSelected.title}`} variant="outlined" sx={{mb:1}}/>
          <br />
          <Chip label={`Descrição: ${postSelected.description}`} variant="outlined" />
        </Grid>
      }

      <Button type='submit' variant='contained'>Enviar</Button>
    </Stack>
  )
}
