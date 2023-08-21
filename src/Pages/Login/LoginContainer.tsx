import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { defaultValuesLogin, loginSchema } from "./Schema/LoginSchema"
import { TextFormField } from "Components/TextFormField/TextFormField"
import { Button, Stack, Typography } from "@mui/material"
import { useLoginMutation } from "Hooks/Auth/LoginHook"
import { IApiTypeError, useApiError } from "Contexts/ApiErrorContext"
import { Error } from "Components/Error/Error"

export const LoginContainer = () => {
  const { setSubmitError, submitError } = useApiError(); 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema()),
    defaultValues: defaultValuesLogin
  }); 

  const onSuccess = (values: any) => {
    setSubmitError(undefined); 
  }
  const onError = (error: IApiTypeError) => {
    setSubmitError(error); 
  }

  const { mutate, isError, isLoading } = useLoginMutation(onSuccess, onError);

  const onSubmit = (data: any) => {
    mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ margin: 10 }}>
      <Stack spacing={2} maxWidth={500} justifyContent='center' m='20vh auto'>
        <Typography variant="h2">Login</Typography>
        <TextFormField
          register={register}
          label="Email"
          error={errors}
          name="email"
          fullWidth
          required
        />
        <TextFormField
          register={register}
          label="Senha"
          fullWidth
          required
          error={errors}
          name="password"
        />
        {isError && <Error error={submitError!}/>}
        <Button variant="contained" disabled={isLoading} sx={{ p: 1 }} type="submit">Entrar</Button>
      </Stack>
    </form>
  )
}