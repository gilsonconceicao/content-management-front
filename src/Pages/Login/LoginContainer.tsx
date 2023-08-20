import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { defaultValuesLogin, loginSchema } from "./Schema/LoginSchema"
import { TextFormField } from "Components/TextFormField/TextFormField"
import { Button, Stack, Typography } from "@mui/material"
import { useLoginMutation } from "Hooks/Auth/LoginHook"

export const LoginContainer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema()),
    defaultValues: defaultValuesLogin
  })

  const onSuccess = (values: any) => {
    debugger
  }
  const onError = (values: any) => {
    debugger
  }

  const { mutate } = useLoginMutation(onSuccess, onError);

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
        <Button variant="contained" sx={{ p: 1 }} type="submit">Entrar</Button>
      </Stack>
    </form>
  )
}