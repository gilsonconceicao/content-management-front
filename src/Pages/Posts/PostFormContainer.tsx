import React, { useMemo, useState } from 'react'
import { PostForm } from './PostForm'
import { useGetAllPosts } from 'Hooks/Posts/PostsHooks';
import { FormProvider } from 'Contexts/FormContext';
import { OptionSelect } from 'Components/Forms/Autocomplete/AutocompleteFormField';
import { postFormValidationSchema, postFormdefaultValues } from './Schema/PostFormSchema';
import ModalCustom from 'Components/Modal/Modal';
import { postManualFormdefaultValues, postmanualFormValidationSchema } from './Schema/PostManual';
import { PostManualForm } from './PostManualForm';
import { PostType } from 'Services/posts/posts';
import { FieldValues } from 'react-hook-form';

export const PostFormContainer = () => {
  const [postId, setPostId] = useState<string | undefined>(undefined);
  const [formValues, setFormValues] = useState<PostType | null>(null);
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false)

  const { data: postsData } = useGetAllPosts();

  const postOptionsList = postsData && postsData?.map(item => {
    return { label: item.title, value: item.id }
  }) as OptionSelect[];

  useMemo(() => {
    if (postId !== undefined) {
      const find = postsData?.find(item => item.id === postId);
      setFormValues(find as PostType);
      setIsAdd(false)
    }
  }, [postId, postsData]);

  const createPostModeManual = (values: FieldValues) => {
    setFormValues(values as PostType);
    setOpen(false);
    setIsAdd(true)
    setPostId(undefined);
  };

  const postSelectedbyId = ({ postId }: FieldValues) => {
    alert(JSON.stringify(formValues))
  }

  return (
    <div>
      <FormProvider
        defaultValues={postFormdefaultValues}
        validationSchema={postFormValidationSchema()}
        onSubmit={postSelectedbyId}
      >
        <PostForm
          isAdd={isAdd}
          postOptionsList={postOptionsList}
          postSelected={formValues}
          setPostId={setPostId}
          onAddPost={() => setOpen(true)}
        />
      </FormProvider>

      <ModalCustom
        title='Adicionar post'
        open={open}
        onClose={() => setOpen(false)}
        children={
          <FormProvider
            defaultValues={postManualFormdefaultValues}
            validationSchema={postmanualFormValidationSchema()}
            onSubmit={createPostModeManual}
          >
            <PostManualForm
              onClose={() => setOpen(false)}
            />
          </FormProvider>
        }
      />
    </div>
  )
}
